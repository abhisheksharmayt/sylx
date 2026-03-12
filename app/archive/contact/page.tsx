import type { Metadata } from "next";
import Contact from "@/components/archive/contact/Contact";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function ArchiveContactPage() {
  return <Contact />;
}
