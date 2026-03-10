import Link from "next/link";

export const metadata = {
  title: "Privacy Policy – LinkShift | Chrome Extension",
  description:
    "Privacy policy for LinkShift. LinkShift does not collect, store, or transmit personal data.",
};

export default function LinkShiftPrivacyPage() {
  return (
    <main
      className="linkshift-privacy"
      style={{
        maxWidth: "42rem",
        margin: "0 auto",
        padding: "2rem 1rem 4rem",
        minHeight: "100vh",
      }}
    >
      <Link
        href="/"
        style={{
          display: "inline-block",
          marginBottom: "2rem",
          color: "var(--bluish)",
          fontSize: "0.875rem",
          textDecoration: "none",
        }}
      >
        ← Back to home
      </Link>

      <h1
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
          fontWeight: 700,
          color: "var(--dark)",
          marginBottom: "2rem",
        }}
      >
        Privacy Policy for LinkShift
      </h1>

      <div
        style={{
          color: "var(--dark)",
          lineHeight: 1.7,
          fontSize: "1rem",
        }}
      >
        <p style={{ marginBottom: "1.25rem" }}>
          LinkShift does not collect, store, or transmit personal data.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          All redirect rules and counters are stored locally in your browser
          using Chrome storage.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          The History permission is used only to suggest recent sites as
          redirect targets and is never sent off your device.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          LinkShift does not use remote code, analytics, or third‑party
          tracking.
        </p>
      </div>
    </main>
  );
}
