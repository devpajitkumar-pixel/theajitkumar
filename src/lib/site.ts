/** Canonical site origin, no trailing slash. Override with NEXT_PUBLIC_SITE_URL in env. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://theajitkumar.online").replace(/\/$/, "");

export function absoluteUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
