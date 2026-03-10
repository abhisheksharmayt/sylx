import { getPreviewImagePath } from "@/utils/tools";

export interface PreviewTool {
  id: string;
  name: string;
  href: string;
  previewImage?: string;
}

export const previewTools: PreviewTool[] = [
  {
    id: "1",
    name: "Text To Wallpaper",
    href: "https://texttowallpaper.sylx.in",
    previewImage: getPreviewImagePath("Text To Wallpaper"),
  },
  {
    id: "2",
    name: "LinkShift",
    href: "https://linkshift.sylx.in",
    previewImage: getPreviewImagePath("LinkShift"),
  },
];
