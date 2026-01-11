"use client";

import { useEffect, useMemo } from "react";
import { initFirebase } from "@/lib/firebase";
import "@/styles/globals.css";
import { getSubdomain } from "@/utils/common";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check if we are on users resume page
  const isResumeBuilder = useMemo(() => getSubdomain(), []);

  useEffect(() => {
    // Initialize Firebase (will gracefully handle missing config)
    initFirebase();
  }, []);

  // Resume builder has its own clean layout
  if (isResumeBuilder) {
    return (
      <html lang="en">
        <head>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <title>Resume Builder | Abhishek Sharma</title>
        </head>
        <body>{children}</body>
      </html> 
    );
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Abhishek Sharma</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
