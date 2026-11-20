/** Public asset endpoint: image requests do not require a preview login. */
const assetOrigin = "https://id-preview--e1298ede-a5aa-4a92-9c50-e232cecce8a5.lovable.app";

/** Keep local files local, but resolve Lovable CDN pointers on external hosts. */
export function assetUrl(path: string): string {
  return path.startsWith("/__l5e/assets-v1/") ? new URL(path, assetOrigin).href : path;
}