# Writing blog posts

This folder holds Markdown files that become pages at **`/blog/<filename-without-md>`**.

## 1. Create a file

- Path: **`content/blog/your-post-slug.md`**
- **Slug** = file name without `.md` (lowercase, hyphens, no spaces).  
  Example: `redis-queues-101.md` → **https://your-domain/blog/redis-queues-101**
- **`README.md`** in this folder is for authors only and is **not** published as a post.

## 2. Frontmatter (YAML)

Put this at the **top** of the file, between `---` lines:

```yaml
---
title: "Title shown as the page H1 and in listings"
date: "2026-04-26"
description: "One or two sentences for the blog list, meta description, and social previews."
image: "/images/blog/my-thumbnail.svg"
category: "Engineering"
---
```

| Field           | Required | Notes |
|-----------------|----------|--------|
| `title`         | Strongly recommended | Falls back to the slug if missing. |
| `date`          | Recommended | ISO date `YYYY-MM-DD`. Used for sort order (newest first) and sitemap. |
| `description`   | Optional  | Shown on `/blog` and in SEO/Open Graph. |
| `image`         | Optional  | Path under **`public/`** (e.g. `/images/blog/photo.webp`). Alias: `thumbnail`. |
| `category`      | Optional  | Sidebar filters; omit → **Uncategorized**. |

After the closing `---`, write the **body** in Markdown.

## 3. Markdown body

### Headings and SEO

- The **post title** in frontmatter is rendered as the only main **`<h1>`** on the page.
- In the body, start sections with **`##`** and **`###`** (not a duplicate `#` for the same title).
- Use **`####`** if you need a smaller subheading.

### Common syntax

```markdown
## Section

Paragraph with **bold**, *italic*, and a [link](https://example.com).

- Bullet list
- Second item

1. Numbered list
2. Second step

> Short quote or callout.

Inline `code` and fenced blocks:

```ts
const example = "syntax highlighting depends on the Markdown parser";
```

### Images

Put files in **`public/`**, then reference from the site root:

```markdown
![Describe the image for accessibility and SEO](/images/blog/screenshot.png)
```

### YouTube

Raw HTML is allowed. Use the wrapper so the video is responsive:

```markdown
## Demo

<div class="blog-embed">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Short description of the video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>
```

Replace **`VIDEO_ID`** with the id from the watch URL (`youtube.com/watch?v=**this-part**`).

Or link only:

```markdown
[Watch on YouTube](https://www.youtube.com/watch?v=VIDEO_ID)
```

## 4. Preview locally

```bash
npm run dev
```

Open **`http://localhost:3000/blog`** and **`http://localhost:3000/blog/your-slug`**.  
Save the `.md` file and **refresh** the browser to see changes.

Use **`npm run start`** only after **`npm run build`** — it does not pick up new files until you rebuild.

## 5. Production

After adding or removing posts, deploy a fresh **`npm run build`** so:

- Post routes are generated  
- **`sitemap.xml`**, **`robots.txt`**, and **`llms.txt`** stay up to date  

## 6. Safety note

Post HTML is rendered from Markdown/HTML you write. Only publish content you trust—don’t paste untrusted embeds or scripts.

## 7. SEO / social (site-wide)

Optional environment variables (see `src/lib/seo.ts` and `src/lib/json-ld.ts`):

- **`NEXT_PUBLIC_SITE_URL`** — Canonical domain (no trailing slash), e.g. `https://theajitkumar.online`. Used for `metadataBase`, sitemap, and JSON-LD URLs.
- **`NEXT_PUBLIC_TWITTER_HANDLE`** — X/Twitter username without `@`; adds `twitter:site` and `twitter:creator` on shared metadata.
- **`NEXT_PUBLIC_PROFILE_SAME_AS`** — Comma-separated profile URLs (GitHub, LinkedIn, etc.) for **Person** `sameAs` in structured data.
- **`NEXT_PUBLIC_GTM_ID`** — Google Tag Manager container ID (e.g. `GTM-XXXXXXX`). If unset, GTM is not loaded.
