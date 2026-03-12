import type { Metadata } from "next";
import Videos from "@/components/archive/videos/Videos";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function ArchiveVideosPage() {
  return <Videos />;
}
