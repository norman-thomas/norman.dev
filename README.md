# norman.dev

Personal landing page — a creation-forward profile and entry point to the
products I build (Ergo, Walko, and what's next).

Built as a **static-exported Next.js** site so it deploys as plain files to
AWS (S3 + CloudFront) or AWS Amplify.

## Stack

- **Next.js 15** (App Router, `output: "export"` — fully static)
- **Tailwind CSS** for styling (Slate + Acid Lime system)
- **Framer Motion** for scroll-reveals and motion
- **TypeScript**

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # outputs static site to ./out
```

The `out/` directory is a complete static site — no Node server required.

## Editing content

All copy and links live in **`lib/content.ts`** — name, headline, the
through-line, project details, capabilities, and social/email links. Update
there and rebuild. Placeholder links (email, GitHub, LinkedIn, store URLs) are
marked with `TODO`.

## Deploy to AWS

### Option A — S3 + CloudFront (cheapest, most control)

```bash
npm run build
aws s3 sync ./out s3://YOUR_BUCKET --delete
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

Point Route 53 (`norman.dev`) at the CloudFront distribution; use an ACM
certificate for HTTPS.

### Option B — AWS Amplify Hosting (easiest, Git CI/CD)

Connect the repo in the Amplify console. Build settings:

- Build command: `npm run build`
- Output directory: `out`

Amplify handles the CDN, SSL, and custom domain automatically.

## Roadmap

- **v2:** an "ask my AI" widget — a small Lambda (Function URL) proxying the
  LLM call so the API key stays server-side; the static site calls it.
