"use client";

import { useEffect } from "react";

function equalize() {
  if (typeof window === "undefined" || window.innerWidth < 768) {
    const wrappers = document.querySelectorAll<HTMLElement>(
      ".tools-preview-list li .portfolio-link > span:first-child"
    );
    wrappers.forEach((el) => {
      el.style.height = "";
    });
    return;
  }

  const items = document.querySelectorAll<HTMLElement>(".tools-preview-list li");
  for (let i = 0; i < items.length; i += 2) {
    const a = items[i];
    const b = items[i + 1];
    if (!a || !b) continue;

    const wrapA = a.querySelector<HTMLElement>(".portfolio-link > span:first-child");
    const wrapB = b.querySelector<HTMLElement>(".portfolio-link > span:first-child");
    if (!wrapA || !wrapB) continue;

    const getContentHeight = (wrap: HTMLElement): number => {
      const img = wrap.querySelector("img");
      if (img && img.naturalWidth) {
        const w = wrap.offsetWidth;
        return (w / img.naturalWidth) * img.naturalHeight;
      }
      return wrap.offsetHeight;
    };

    const hA = getContentHeight(wrapA);
    const hB = getContentHeight(wrapB);
    const minH = Math.min(hA, hB);

    wrapA.style.height = `${minH}px`;
    wrapB.style.height = `${minH}px`;
  }
}

export function EqualizePreviewHeights() {
  useEffect(() => {
    const run = () => {
      requestAnimationFrame(equalize);
    };

    run();
    window.addEventListener("load", run);
    window.addEventListener("resize", run);

    return () => {
      window.removeEventListener("load", run);
      window.removeEventListener("resize", run);
    };
  }, []);

  return null;
}
