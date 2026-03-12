import type { Metadata } from "next";
import Projects from "@/components/archive/projects/Projects";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function ArchiveProjectsPage() {
  return <Projects />;
}
