import type { Metadata } from "next";
import Work from "@/components/archive/videos/Work";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ArchiveVideoWorkPage({ params }: PageProps) {
  const { id } = await params;
  return <Work id={id} />;
}
