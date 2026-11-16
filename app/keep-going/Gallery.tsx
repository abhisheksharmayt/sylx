"use client";

import { useState } from "react";
import styles from "./page.module.css";

type GalleryImage = {
  src: string;
  alt: string;
};

function ZoomIcon({ direction }: { direction: "in" | "out" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5M7.5 10.5h6" />
      {direction === "in" && <path d="M10.5 7.5v6" />}
    </svg>
  );
}

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [columns, setColumns] = useState(3);

  return (
    <section aria-label="Keep going image collection">
      <div className={styles.controls}>
        <button type="button" aria-label="Zoom out" title="Zoom out" disabled={columns === 5} onClick={() => setColumns((value) => Math.min(value + 1, 5))}>
          <ZoomIcon direction="out" />
        </button>
        <button type="button" aria-label="Zoom in" title="Zoom in" disabled={columns === 1} onClick={() => setColumns((value) => Math.max(value - 1, 1))}>
          <ZoomIcon direction="in" />
        </button>
      </div>
      <div className={styles.gallery} style={{ columnCount: columns }}>
        {images.map((image, index) => (
          <figure className={styles.imageCard} key={image.src}>
            {/* Keep each uploaded image's natural aspect ratio. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} loading={index === 0 ? "eager" : "lazy"} />
          </figure>
        ))}
      </div>
    </section>
  );
}
