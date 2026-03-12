import type { Metadata } from "next";
import About from "@/components/archive/about/About";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function ArchiveAboutPage() {
  return <About />;
}
