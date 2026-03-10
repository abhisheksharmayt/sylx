function toSnakeCase(str: string): string {
  return str
    .trim()
    .replace(/\s+/g, "_")
    .toLowerCase();
}

export function getPreviewImagePath(name: string): string {
  return `/images/toolsImage/${toSnakeCase(name)}.png`;
}
