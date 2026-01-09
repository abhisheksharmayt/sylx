import Work from "@/components/videos/Work";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function VideoWorkPage({ params }: PageProps) {
  const { id } = await params;
  return <Work id={id} />;
}

