export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
}

const GITHUB_API = "https://api.github.com";

// Revalidate hourly — profile/repo data doesn't need to be real-time,
// and this keeps well within GitHub's unauthenticated rate limit (60/hr).
const REVALIDATE_SECONDS = 3600;

/**
 * TODO (optional upgrade): true "pinned repositories" and a contribution
 * calendar both require the GitHub GraphQL API with an authenticated
 * token — the REST API used below can't return either. To add this later:
 *   1. Generate a GitHub personal access token with public read scope only
 *   2. Store it as GITHUB_TOKEN in your deployment's environment variables
 *      (never commit it) — e.g. Vercel → Project Settings → Environment Variables
 *   3. Query the GraphQL endpoint (https://api.github.com/graphql) for
 *      `pinnedItems` and `contributionsCollection` on the `user` field,
 *      sending `Authorization: Bearer ${process.env.GITHUB_TOKEN}`
 * Until then, "Recent repositories" (sorted by updated_at) and the
 * language breakdown below are the keyless equivalents this site uses.
 */

async function githubFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${GITHUB_API}${path}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getGitHubUser(username: string): Promise<GitHubUser | null> {
  return githubFetch<GitHubUser>(`/users/${username}`);
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const repos = await githubFetch<GitHubRepo[]>(
    `/users/${username}/repos?per_page=100&sort=updated`
  );
  if (!repos) return [];
  // Exclude forks — "pinned/recent" should reflect original work
  return repos.filter((r) => !r.fork);
}

export function getMostStarred(repos: GitHubRepo[], count = 4): GitHubRepo[] {
  return [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, count);
}

export function getMostRecent(repos: GitHubRepo[], count = 4): GitHubRepo[] {
  return [...repos]
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .slice(0, count);
}

export function getLanguageBreakdown(repos: GitHubRepo[]): { language: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const repo of repos) {
    if (!repo.language) continue;
    counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([language, count]) => ({ language, count }))
    .sort((a, b) => b.count - a.count);
}
