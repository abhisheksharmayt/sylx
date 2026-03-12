import type { Metadata } from "next";
import "@/styles/globals.css";
import { getSubdomain } from "@/utils/common";
import { initFirebase } from "@/lib/firebase";
import { useEffect, useMemo } from "react";

const siteUrl = "https://sylx.in";
const ogImageUrl = `${siteUrl}/images/utility-products-portfolio-og.png`;

export const metadata: Metadata = {
  metadataBase: new URL("https://sylx.in"),
  title: {
    default: "Abhishek Sharma | Utility Products & Developer Tools",
    template: "%s | Abhishek Sharma",
  },
  description:
    "Explore utility products, small experiments, and developer tools by Abhishek Sharma. A focused portfolio of tools that make everyday workflows easier for developers and creators.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abhishek Sharma – Utility Products & Developer Tools",
    description:
      "Basecamp for utility products, experiments, and small tools that enhance everyday workflows for developers and creators.",
    url: "https://sylx.in/",
    siteName: "Abhishek Sharma",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Abhishek Sharma utility products and developer tools portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Sharma – Utility Products & Developer Tools",
    description:
      "A curated portfolio of utility products and developer tools built by Abhishek Sharma.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check if we are on users resume page
  const isResumeBuilder = useMemo(() => getSubdomain(), []);

  useEffect(() => {
    // Initialize Firebase (will gracefully handle missing config)
    initFirebase();
  }, []);

  // Resume builder has its own clean layout
  if (isResumeBuilder) {
    return (
      <html lang="en">
        <body>
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Abhishek Sharma Resume Builder",
                url: "https://resume.sylx.in",
              }),
            }}
          />
          {children}
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abhishek Sharma",
              url: siteUrl,
              sameAs: [
                "https://github.com/abhisheksharmayt",
                "https://www.linkedin.com/in/abhisheksharmayt",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Abhishek Sharma – Utility Products & Developer Tools",
              url: siteUrl,
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
