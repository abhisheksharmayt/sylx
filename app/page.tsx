import Image from "next/image";
import Link from "next/link";
import { previewTools, type PreviewTool } from "./page-data";
import styles from "./home.module.css";

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 19 19 5M7 5h12v12" />
    </svg>
  );
}

function ProjectCard({ tool, index }: { tool: PreviewTool; index: number }) {
  const content = (
    <>
      <div className={styles.visual}>
        {tool.previewImage ? (
          <Image
            src={tool.previewImage}
            alt={tool.alt ?? tool.name}
            fill
            priority={index === 0}
            sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 66vw"
            className={styles.image}
          />
        ) : (
          <span className={styles.fallback}>{tool.name}</span>
        )}
      </div>
      <div className={styles.details}>
        <div className={styles.meta}>
          <span>{tool.category}</span>
          <span>
            {String(index + 1).padStart(2, "0")} / {String(previewTools.length).padStart(2, "0")}
          </span>
        </div>
        <div className={styles.headingRow}>
          <h2>{tool.name}</h2>
          <span className={styles.arrow}>
            <ArrowIcon />
          </span>
        </div>
        <p>{tool.description}</p>
      </div>
    </>
  );

  return (
    <li className={styles.item}>
      {tool.href.startsWith("http") ? (
        <a
          className={styles.card}
          href={tool.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      ) : (
        <Link className={styles.card} href={tool.href}>
          {content}
        </Link>
      )}
    </li>
  );
}

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.topline}>
          <span className={styles.wordmark}>SYLX<span className={styles.wordmarkDot}>.</span></span>
          <a
            className={styles.githubLink}
            href="https://github.com/abhisheksharmayt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View my GitHub profile"
          >
            <Image src="/icons/github-142.svg" alt="" width={19} height={19} />
            <span>GitHub</span>
          </a>
        </div>

        <header className={styles.hero}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            Projects
          </div>
          <h1>Apps and tools<br />I&apos;ve built.</h1>
          <p>
            Projects for working, creating, and staying connected.
          </p>
        </header>

        <section aria-label="Featured products">
          <ul className={styles.grid}>
            {previewTools.map((tool, index) => (
              <ProjectCard key={tool.id} tool={tool} index={index} />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
