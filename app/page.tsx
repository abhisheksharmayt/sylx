import Link from "next/link";
import Image from "next/image";
import { previewTools } from "./page-data";

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
      <h1
        style={{
          fontSize: "clamp(1.5rem, 5vw, 3rem)",
          fontWeight: 700,
          textAlign: "center",
          margin: 0,
          padding: "0 1rem",
          lineHeight: 1.2,
        }}
      >
        Basecamp for Utility Products
      </h1>

      <ul
        style={{
          listStyle: "none",
          margin: "1.5rem 0 0",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          maxWidth: "32rem",
        }}
      >
        {previewTools.map((tool) => {
          const linkStyle = {
            display: "flex",
            flexDirection: "column" as const,
            color: "#333",
            fontSize: "0.875rem",
            textDecoration: "none",
            border: "1px solid #eee",
            borderRadius: "8px",
            boxSizing: "border-box" as const,
            overflow: "hidden",
          };
          const previewAspectRatio = "5 / 3";
          const content = (
            <>
              {tool.previewImage ? (
                <span
                  style={{
                    display: "block",
                    lineHeight: 0,
                    width: "100%",
                    margin: 0,
                    overflow: "hidden",
                    background: "#f5f5f5",
                  }}
                >
                  <Image
                    src={tool.previewImage}
                    alt={tool.name}
                    width={1200}
                    height={720}
                    sizes="(max-width: 32rem) 100vw, 32rem"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      margin: 0,
                      display: "block",
                      verticalAlign: "middle",
                    }}
                  />
                </span>
              ) : (
                <span
                  style={{
                    display: "flex",
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
                  }}
                >
                  {tool.name}
                </span>
              )}
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.5rem",
                  padding: "0.75rem 1rem",
                }}
              >
                <span style={{ fontWeight: 500 }}>{tool.name}</span>
                <span style={{ flexShrink: 0, color: "#999" }}>
                  <ArrowIcon />
                </span>
              </span>
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

      <Link
        href="/archive"
        className="portfolio-link"
        style={{
          position: "absolute",
          bottom: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "#666",
          fontSize: "0.875rem",
        }}
      >
        view portfolio
        <ArrowIcon />
      </Link>
    </main>
  );
}
