export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  /** Path under /public, e.g. /images/blog/thumb.svg */
  image?: string;
  category?: string;
  /** When true, prioritized on the homepage “featured writing” block (filled with latest posts if none). */
  featured?: boolean;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};
