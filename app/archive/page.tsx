import type { Metadata } from "next";
import Home from "@/components/archive/home/Home";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function ArchiveHomePage() {
  return <Home />;
}
