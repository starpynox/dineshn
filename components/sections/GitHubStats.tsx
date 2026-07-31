import { getGitHubUser, getGitHubRepos, getMostRecent, getLanguageBreakdown } from "@/lib/github";
import { GITHUB_USERNAME } from "@/constants/github";
import { GitHubStatsClient } from "./GitHubStatsClient";

export async function GitHubStats() {
  const [user, repos] = await Promise.all([
    getGitHubUser(GITHUB_USERNAME),
    getGitHubRepos(GITHUB_USERNAME),
  ]);

  const recent = getMostRecent(repos, 5);
  const languages = getLanguageBreakdown(repos);

  return <GitHubStatsClient user={user} recent={recent} languages={languages} />;
}
