# Writing blog posts

Posts are **`content/blog/<slug>.html` only** (no Markdown). URLs: **`/blog/<slug>`**.

The page wraps your HTML in **`blog-prose`** for baseline typography (paragraphs, `h2`–`h4`, lists, links, code). You can also use **Tailwind utility classes** on any element; `globals.css` includes `@source` for this folder so those classes are picked up at build time.

**`README.md`** is for authors only and is **not** a published post.

## Frontmatter (YAML)

At the top of the file, between `---` lines:

```yaml
---
title: "Title for H1 and listings"
date: "2026-04-26"
description: "Short summary for /blog and SEO."
image: "/images/blog/thumbnail.svg"
category: "Engineering"
---
```

| Field | Required | Notes |
|-------|----------|--------|
| `title` | Strongly recommended | Falls back to slug if missing. |
| `date` | Recommended | `YYYY-MM-DD`; sort order and sitemap. |
| `description` | Optional | List + meta description. |
| `image` | Optional | Path under `public/`. Alias: `thumbnail`. |
| `category` | Optional | Sidebar filters; omit → Uncategorized. |
| `featured` | Optional | `true` pins to homepage “Writing” block first. |

After the closing `---`, write **HTML**. Use **`<h2>`** / **`<h3>`** for sections (the post title from frontmatter is the only page **`<h1>`**).

## Tailwind in posts

Example:

```html
<p class="text-[var(--muted)] italic">Callout styled with Tailwind.</p>
<div class="mt-6 rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] p-4">
  <p class="text-sm text-[var(--heading)]">Card-style block</p>
</div>
```

Use **`text-[var(--heading)]`**, **`text-[var(--muted)]`**, **`border-[var(--border)]`**, etc. to match the site theme.

## Images & embeds

Images live in **`public/`**:

```html
<img src="/images/blog/screenshot.png" alt="Description" class="rounded-xl" />
```

Responsive video:

```html
<div class="blog-embed">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Video description"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>
```

## Preview & production

```bash
npm run dev
```

Open `/blog` and `/blog/your-slug`. Production needs a fresh **`npm run build`** after adding or removing posts (routes, sitemap, etc.).

## Safety

Only publish HTML you trust. Don’t paste untrusted scripts or embeds.
