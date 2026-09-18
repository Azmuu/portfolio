/**
 * Prefix public asset paths with Vite base (e.g. "/portfolio/" on GitHub Pages).
 * Pass paths like "/profile/asma.png" or "profile/asma.png".
 */
export function assetUrl(path = "") {
  const base = import.meta.env.BASE_URL || "/";
  const normalized = String(path).replace(/^\/+/, "");
  return `${base}${normalized}`;
}
