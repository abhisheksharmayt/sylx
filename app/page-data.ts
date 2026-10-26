import { getPreviewImagePath } from "@/utils/tools";

export interface PreviewTool {
  id: string;
  name: string;
  href: string;
  previewImage?: string | null;
  category?: string;
  description?: string;
  alt?: string;
  tags?: string[];
}

export const previewTools: PreviewTool[] = [
  {
    id: "doodlesync",
    name: "DoodleSync",
    href: "https://doodlesync.sylx.in/",
    previewImage: getPreviewImagePath("DoodleSync"),
    category: "Shared drawing app",
    description:
      "Draw together in private rooms, share photos, and keep each other's creations on your home screen.",
    alt: "DoodleSync App Store screenshots showing a shared drawing, home screen widget, and photo doodle",
    tags: ["shared drawing", "photos", "home screen widgets"],
  },
  {
    id: "3",
    name: "AI Mock Interview",
    href: "https://github.com/abhisheksharmayt/AI-Mock-Interview",
    previewImage: getPreviewImagePath("AI Mock Interview"),
    category: "Interview practice",
    description:
      "AI-powered mock interview platform that delivers personalized, voice-first interviews based on a candidate's resume and job description.",
    alt: "AI Mock Interview preview placeholder",
    tags: ["ai", "interview", "voice-first", "resume"],
  },
  {
    id: "1",
    name: "Text To Wallpaper",
    href: "https://texttowallpaper.sylx.in",
    previewImage: getPreviewImagePath("Text To Wallpaper"),
    category: "Creative tool",
    description:
      "Turn any text into clean, shareable wallpapers for social posts, lock screens, and stories.",
    alt: "Screenshot of the Text To Wallpaper tool generating a wallpaper from a quote",
    tags: ["wallpaper generator", "social media", "text to image"],
  },
  {
    id: "2",
    name: "LinkShift",
    href: "https://chromewebstore.google.com/detail/jhfcfkpjfaekdcpahmmchdcghdbhgill",
    previewImage: getPreviewImagePath("LinkShift"),
    category: "Browser extension",
    description:
      "Smart link tool for shifting, shortening, and organizing URLs with simple, privacy-friendly controls.",
    alt: "Screenshot of the LinkShift link management and shortening dashboard",
    tags: ["link shortener", "url manager", "productivity"],
  },
];
