"use client";

import { useEffect, useState } from "react";
import { initFirebase } from "@/lib/firebase";
import Navbar from "@/components/navbar/Navbar";
import Social from "@/components/social/social";
import Terminal from "@/components/terminal/Terminal";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggleTerminal, setToggleTerminal] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkKeyValues = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "/") {
        setToggleTerminal((prev) => !prev);
      }
    };

    // Initialize Firebase (will gracefully handle missing config)
    initFirebase();
    
    document.addEventListener("keydown", checkKeyValues);
    setIsReady(true);

    return () => {
      document.removeEventListener("keydown", checkKeyValues);
    };
  }, []);

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
        {isReady ? (
          <>
            <Navbar />
            {children}
            <Social />
            {toggleTerminal && <Terminal />}
          </>
        ) : (
          <div>Loading...</div>
        )}
      </body>
    </html>
  );
}
