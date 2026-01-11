import Work from "@/components/archive/videos/Work";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ArchiveVideoWorkPage({ params }: PageProps) {
  const { id } = await params;
  return <Work id={id} />;
}
