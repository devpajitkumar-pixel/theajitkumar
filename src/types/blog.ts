export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  /** Path under /public, e.g. /images/blog/thumb.svg */
  image?: string;
  category?: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};
