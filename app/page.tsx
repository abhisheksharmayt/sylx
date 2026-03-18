import Link from "next/link";
import Image from "next/image";
import { previewTools } from "./page-data";
import fs from "node:fs";
import path from "node:path";

function getPngDimensions(filePath: string): { width: number; height: number } | null {
  try {
    const buf = fs.readFileSync(filePath);
    // PNG: IHDR is the first chunk after the 8-byte signature.
    // Width/height are stored as 32-bit big-endian integers at offsets 16 and 20.
    if (buf.length < 24) return null;
    const width = buf.readUInt32BE(16);
    const height = buf.readUInt32BE(20);
    if (!width || !height) return null;
    return { width, height };
  } catch {
    return null;
  }
}

function getBaselinePreviewAspectRatioCss(tools: typeof previewTools): string {
  // Height (for a given width) is proportional to 1 / (width/height).
  // To match "smallest card height in the row", we pick the *largest* image aspect ratio.
  let best: { width: number; height: number } | null = null;

  for (const tool of tools) {
    if (!tool.previewImage) continue;
    // previewImage is a public URL (/images/toolsImage/*.png), but we need the on-disk path.
    const absPath = path.join(
      process.cwd(),
      "public",
      tool.previewImage.replace(/^\//, "")
    );
    const dims = getPngDimensions(absPath);
    if (!dims) continue;
    if (!best) {
      best = dims;
      continue;
    }
    if (dims.width / dims.height > best.width / best.height) best = dims;
  }

  return best ? `${best.width} / ${best.height}` : "5 / 3";
}

const BASELINE_PREVIEW_ASPECT_RATIO_CSS = getBaselinePreviewAspectRatioCss(previewTools);

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

function isExternal(href: string) {
  return href.startsWith("http");
}

export default function HomePage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100dvh",
        minHeight: "auto",
        padding: "2.5rem 1rem 1rem",
        overflow: "auto",
        position: "fixed",
        inset: 0,
        boxSizing: "border-box",
      }}
    >
      <header
        style={{
          textAlign: "center",
          padding: "0 1rem",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.5rem, 5vw, 3rem)",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          Basecamp for utility products
        </h1>
        <p
          style={{
            marginTop: "0.75rem",
            marginBottom: "1.5rem",
            fontSize: "0.95rem",
            color: "#555",
          }}
        >
          Small tools that make everyday workflows easier.
        </p>
      </header>

      <section
        aria-label="Featured utility products"
        style={{ width: "100%", maxWidth: "var(--home-max-width)" }}
      >
        <ul
          className="tools-preview-list"
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1.1rem",
            width: "100%",
          }}
        >
        {previewTools.map((tool) => {
          const linkStyle = {
            display: "flex",
            flexDirection: "column" as const,
            color: "#333",
            fontSize: "0.95rem",
            textDecoration: "none",
            border: "1px solid #eee",
            borderRadius: "8px",
            boxSizing: "border-box" as const,
            overflow: "hidden",
          };
          const previewAspectRatio = BASELINE_PREVIEW_ASPECT_RATIO_CSS;
          const content = (
            <>
              {tool.previewImage ? (
                <span
                  style={{
                    display: "block",
                    position: "relative",
                    aspectRatio: previewAspectRatio,
                    lineHeight: 0,
                    width: "100%",
                    margin: 0,
                    overflow: "hidden",
                    background: "#f5f5f5",
                  }}
                >
                  <Image
                    src={tool.previewImage}
                    alt={tool.alt ?? tool.name}
                    fill
                    sizes="(max-width: 36rem) 100vw, 36rem"
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: 0,
                      display: "block",
                      verticalAlign: "middle",
                      objectFit: "cover",
                    }}
                  />
                </span>
              ) : (
                <span
                  style={{
                    display: "flex",
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    aspectRatio: previewAspectRatio,
                    background: "#f5f5f5",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#666",
                    textAlign: "center",
                    padding: "1rem",
                    overflow: "hidden",
                  }}
                >
                  {tool.name}
                </span>
              )}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                  padding: "0.9rem 1.1rem",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <span className="tool-name" style={{ fontWeight: 500 }}>
                    {tool.name}
                  </span>
                  <p
                    className="tool-description"
                    style={{
                      margin: 0,
                      fontSize: "0.85rem",
                      color: "#555",
                    }}
                  >
                    {tool.description ?? ""}
                  </p>
                </div>
                <span className="tool-arrow" style={{ flexShrink: 0, marginTop: "0.1rem" }}>
                  <ArrowIcon />
                </span>
              </div>
            </>
          );
          return (
            <li key={tool.id}>
              {isExternal(tool.href) ? (
                <a
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-link"
                  style={linkStyle}
                >
                  {content}
                </a>
              ) : (
                <Link href={tool.href} className="portfolio-link" style={linkStyle}>
                  {content}
                </Link>
              )}
            </li>
          );
        })}
        </ul>
      </section>

      <nav
        aria-label="Portfolio navigation"
        style={{
          width: "100%",
          maxWidth: "var(--home-max-width)",
          marginTop: "auto", // pushes the archive link to the bottom of the viewport
          paddingTop: "2rem",
          paddingBottom: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          href="/archive"
          className="portfolio-link"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            color: "#666",
            fontSize: "0.875rem",
          }}
        >
          View full portfolio archive
          <ArrowIcon />
        </Link>
      </nav>
    </main>
  );
}
