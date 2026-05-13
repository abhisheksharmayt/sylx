export const metadata = {
  title: "Support – DoodleSync",
  description: "Get support for DoodleSync, a collaborative real-time drawing app.",
};

export default function DoodleSyncSupportPage() {
  return (
    <main
      style={{
        maxWidth: "42rem",
        margin: "0 auto",
        padding: "2rem 1rem 4rem",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
          fontWeight: 700,
          color: "var(--dark)",
          marginBottom: "2rem",
        }}
      >
        DoodleSync Support
      </h1>

      <div
        style={{
          color: "var(--dark)",
          lineHeight: 1.7,
          fontSize: "1rem",
        }}
      >
        <p style={{ marginBottom: "1.25rem" }}>
          Need help with DoodleSync? We&apos;re here to assist you.
        </p>

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          Contact Support
        </h2>
        <p style={{ marginBottom: "1.25rem" }}>
          For any questions, issues, or feedback, reach out to us at{" "}
          <a
            href="mailto:ohsharmaabhi03@gmail.com"
            style={{ color: "var(--bluish)", textDecoration: "underline" }}
          >
            contact us here
          </a>
          . We typically respond within 1–2 business days.
        </p>

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          Common Issues
        </h2>
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            marginTop: "1.25rem",
          }}
        >
          Can&apos;t join a session
        </h3>
        <p style={{ marginBottom: "1rem" }}>
          Make sure you have the correct session code from the session host.
          Session codes are case-sensitive.
        </p>

        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            marginTop: "1.25rem",
          }}
        >
          Drawings not syncing
        </h3>
        <p style={{ marginBottom: "1rem" }}>
          Check your internet connection and try rejoining the session. If the
          issue persists, close and reopen the app.
        </p>

        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            marginTop: "1.25rem",
          }}
        >
          Sign-in issues
        </h3>
        <p style={{ marginBottom: "1rem" }}>
          Ensure you are using a valid Google account. If sign-in fails, try
          signing out and back in, or reinstall the app.
        </p>

        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            marginTop: "1.25rem",
          }}
        >
          Account or data deletion
        </h3>
        <p style={{ marginBottom: "1.25rem" }}>
          To request deletion of your account and associated data,{" "}
          <a
            href="mailto:ohsharmaabhi03@gmail.com"
            style={{ color: "var(--bluish)", textDecoration: "underline" }}
          >
            contact us here
          </a>{" "}
          with the subject line &quot;Data Deletion Request&quot;.
        </p>

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          Privacy Policy
        </h2>
        <p style={{ marginBottom: "1.25rem" }}>
          Read our{" "}
          <a
            href="/privacy_policy"
            style={{ color: "var(--bluish)", textDecoration: "underline" }}
          >
            Privacy Policy
          </a>{" "}
          to learn how we handle your data.
        </p>
      </div>
    </main>
  );
}
