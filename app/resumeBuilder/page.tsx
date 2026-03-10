"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function ResumePageContent() {
  const searchParams = useSearchParams();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    // Get username from URL params (set by middleware) or from subdomain
    const usernameFromParams = searchParams.get("username");
    
    if (usernameFromParams) {
      setUsername(usernameFromParams);
    } else {
      // Fallback: extract from subdomain directly
      const host = window.location.hostname;
      const hostParts = host.split(".");
      
      if (
        hostParts.length >= 3 ||
        (hostParts.length === 2 && hostParts[1].startsWith("localhost"))
      ) {
        const subdomain = hostParts[0] === "www" ? hostParts[1] : hostParts[0];
        setUsername(subdomain);
      }
    }
  }, [searchParams]);

  if (!username) {
    return (
      <div className="resume-page resume-page--loading">
        <p>Loading resume...</p>
      </div>
    );
  }

  return (
    <div className="resume-page">
      <header className="resume-header">
        <h1>{username}'s Resume</h1>
      </header>
      
      <main className="resume-content">
        {/* TODO: Fetch and display actual resume data for this user */}
        <section className="resume-section">
          <h2>About</h2>
          <p>Resume page for <strong>{username}</strong></p>
        </section>
        
        <section className="resume-section">
          <h2>Experience</h2>
          <p>Coming soon...</p>
        </section>
        
        <section className="resume-section">
          <h2>Skills</h2>
          <p>Coming soon...</p>
        </section>
        
        <section className="resume-section">
          <h2>Contact</h2>
          <p>Coming soon...</p>
        </section>
      </main>
      
      <footer className="resume-footer">
        <p>Powered by Portfolio Builder</p>
      </footer>
    </div>
  );
}

export default function ResumePage() {
  return (
    <Suspense
      fallback={
        <div className="resume-page resume-page--loading">
          <p>Loading resume...</p>
        </div>
      }
    >
      <ResumePageContent />
    </Suspense>
  );
}

