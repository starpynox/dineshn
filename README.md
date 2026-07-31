# Dinesh Narasimhulu — Portfolio

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before deploying

- Replace placeholder URLs in `constants/socials.ts` (GitHub, LinkedIn)
- Replace domain placeholder in `constants/metadata.ts`
- Review `// DRAFT` comments in `lib/data/projects.ts` — these are content
  drafted from your resume and should reflect your actual first-hand
  account of challenges/lessons learned before this goes live
- Add real project screenshots to `public/images/`
- Add your resume PDF to `public/resume/`
- Provide your GitHub username to wire up the live GitHub stats section

## Optional upgrade: real pinned repos + contribution graph

The GitHub section currently uses the public REST API (no key needed),
showing recent repositories and a language breakdown instead of true
"pinned repos" and a contribution calendar — the REST API can't return
either of those. If you want the real versions later:

1. Generate a GitHub personal access token with public read scope only
2. Store it as `GITHUB_TOKEN` in your deployment's environment variables
   (never commit it — e.g. Vercel → Project Settings → Environment Variables)
3. Query the GraphQL endpoint (`https://api.github.com/graphql`) for
   `pinnedItems` and `contributionsCollection` on the `user` field, sending
   `Authorization: Bearer ${process.env.GITHUB_TOKEN}`

See the `TODO` comment in `lib/github.ts` for the exact spot to extend.
