export const metadata = {
  title: "Privacy Policy – DoodleSync",
  description:
    "Privacy policy for DoodleSync, a collaborative real-time drawing app.",
};

export default function DoodleSyncPrivacyPage() {
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
          marginBottom: "0.5rem",
        }}
      >
        Privacy Policy for DoodleSync
      </h1>

      <p
        style={{
          color: "var(--dark)",
          fontSize: "0.875rem",
          marginBottom: "2rem",
          opacity: 0.7,
        }}
      >
        Effective Date: May 13, 2026
      </p>

      <div
        style={{
          color: "var(--dark)",
          lineHeight: 1.7,
          fontSize: "1rem",
        }}
      >
        <p style={{ marginBottom: "1.25rem" }}>
          DoodleSync is a collaborative drawing app that lets users create and
          join drawing sessions in real time.
        </p>

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          Information We Collect
        </h2>
        <p style={{ marginBottom: "0.75rem" }}>
          When you use DoodleSync, we may collect the following information:
        </p>

        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            marginTop: "1.25rem",
          }}
        >
          1. Account Information
        </h3>
        <p style={{ marginBottom: "1rem" }}>
          If you sign in with Google, we may collect your display name, email
          address, and Firebase user ID.
        </p>

        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            marginTop: "1.25rem",
          }}
        >
          2. User Content
        </h3>
        <p style={{ marginBottom: "1rem" }}>
          We store drawings, doodle strokes, session codes, session titles, and
          shared session data so that participants can collaborate in real time.
        </p>

        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            marginTop: "1.25rem",
          }}
        >
          3. Device and Push Notification Information
        </h3>
        <p style={{ marginBottom: "1rem" }}>
          We may collect device push notification tokens to send session or
          widget update notifications.
        </p>

        <h3
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            marginTop: "1.25rem",
          }}
        >
          4. Technical Information
        </h3>
        <p style={{ marginBottom: "1rem" }}>
          We may collect basic technical logs needed to operate, secure, and
          debug the app.
        </p>

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          How We Use Information
        </h2>
        <p style={{ marginBottom: "0.5rem" }}>
          We use collected information to:
        </p>
        <ul
          style={{
            paddingLeft: "1.5rem",
            marginBottom: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          <li>Let users sign in</li>
          <li>Create and join drawing sessions</li>
          <li>Sync drawings between participants</li>
          <li>Update widgets and send app notifications</li>
          <li>Maintain app security</li>
          <li>Debug and improve app functionality</li>
        </ul>

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          Data Sharing
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          We do not sell your personal information.
        </p>
        <p style={{ marginBottom: "1.25rem" }}>
          DoodleSync uses Firebase and related Google services for
          authentication, database storage, cloud functions, and notifications.
          These services may process data as needed to provide app functionality.
        </p>

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          User Content
        </h2>
        <p style={{ marginBottom: "1.25rem" }}>
          Drawings and session data are shared with users who join the same
          session using the session code. Do not share a session code with
          someone unless you want them to access that session.
        </p>

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          Data Retention
        </h2>
        <p style={{ marginBottom: "1.25rem" }}>
          We keep account, session, drawing, and notification data for as long
          as needed to provide the app&apos;s functionality, unless deletion is
          requested or the data is no longer required.
        </p>

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          Data Deletion
        </h2>
        <p style={{ marginBottom: "1.25rem" }}>
          You may request deletion of your account data and associated app data
          by contacting us at{" "}
          <a
            href="mailto:ohsharmaabhi03@gmail.com"
            style={{ color: "var(--bluish)" }}
          >
            ohsharmaabhi03@gmail.com
          </a>
        </p>

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          Children&apos;s Privacy
        </h2>
        <p style={{ marginBottom: "1.25rem" }}>
          DoodleSync is not intended for children under 13. We do not knowingly
          collect personal information from children under 13.
        </p>

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          Security
        </h2>
        <p style={{ marginBottom: "1.25rem" }}>
          We use Firebase security features and access rules to help protect
          user data. However, no system can guarantee complete security.
        </p>

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          Changes to This Policy
        </h2>
        <p style={{ marginBottom: "1.25rem" }}>
          We may update this Privacy Policy from time to time. Updates will be
          posted on this page with a new effective date.
        </p>

        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.75rem",
            marginTop: "2rem",
          }}
        >
          Contact Us
        </h2>
        <p style={{ marginBottom: "1.25rem" }}>
          If you have questions about this Privacy Policy,{" "}
          <a
            href="mailto:ohsharmaabhi03@gmail.com"
            style={{ color: "var(--bluish)", textDecoration: "underline" }}
          >
            contact us here
          </a>
          .
        </p>
      </div>
    </main>
  );
}
