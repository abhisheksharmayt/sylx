"use client";

import { useEffect, useState } from "react";
import { initFirebase } from "@/lib/firebase";
import Navbar from "@/components/archive/navbar/Navbar";
import Social from "@/components/archive/social/social";
import Terminal from "@/components/archive/terminal/Terminal";
import "@/styles/globals.css";

export default function ArchiveLayout({
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
    <>
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
    </>
  );
}
