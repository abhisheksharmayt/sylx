import type { Metadata } from "next";
import { readdir } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import Gallery from "./Gallery";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Keep Going",
  description: "A growing collection of images and reminders to keep going.",
  alternates: { canonical: "/keep-going" },
};

const imageDirectory = path.join(process.cwd(), "public", "images", "keep-going");
const supportedImage = /\.(avif|gif|jpe?g|png|webp)$/i;
const imageDescriptions: Record<string, string> = {
  "01-figure-it-out.png": "Quote about building a reputation for figuring things out",
  "02-life-reminders.png": "Life reminders to read, walk, learn, be grateful, take risks, and care deeply",
};

async function getImages() {
  const files = await readdir(imageDirectory);

  return files
    .filter((file) => supportedImage.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => ({
      src: `/images/keep-going/${encodeURIComponent(file)}`,
      alt: imageDescriptions[file] ?? file
        .replace(supportedImage, "")
        .replace(/^\d+[\s._-]*/, "")
        .replace(/[-_]+/g, " "),
    }));
}

export default async function KeepGoingPage() {
  const images = await getImages();

  return (
    <main className={styles.page} data-page="keep-going">
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.breadcrumb}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.9 9c.4 0 .8.1 1.1.2V9a3 3 0 0 0-3-3h-3.9a.8.8 0 0 1-.5-.2l-2.1-2.1A2.3 2.3 0 0 0 9.9 3H6a3 3 0 0 0-3 3v3.2A3.8 3.8 0 0 1 4.1 9h15.8ZM4.1 10.5a2.3 2.3 0 0 0-2.2 2.6l.8 6A2.3 2.3 0 0 0 5 21h14a2.3 2.3 0 0 0 2.3-1.9l.8-6a2.3 2.3 0 0 0-2.2-2.6H4.1Z" />
            </svg>
            <span><Link href="/">sylx</Link>/keep-going</span>
          </div>
        </header>
        <h1 className={styles.srOnly}>Keep going</h1>
        <Gallery images={images} />
        <footer className={styles.footer}>More images as I find them.</footer>
      </div>
    </main>
  );
}
