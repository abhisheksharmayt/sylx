import type { Metadata } from "next";
import { headers } from "next/headers";
import "@/styles/globals.css";
import { getSubdomain } from "@/utils/common";

const siteUrl = "https://sylx.in";
const ogImageUrl = `${siteUrl}/images/utility-products-portfolio-og.png`;

export const metadata: Metadata = {
  metadataBase: new URL("https://sylx.in"),
  title: {
    default: "Sylx | Utility Products & Developer Tools",
    template: "%s | Sylx",
  },
  description:
    "Explore utility products, small experiments, and developer tools by Sylx. A focused portfolio of tools that make everyday workflows easier for developers and creators.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sylx – Utility Products & Developer Tools",
    description:
      "Basecamp for utility products, experiments, and small tools that enhance everyday workflows for developers and creators.",
    url: "https://sylx.in/",
    siteName: "Sylx",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Sylx utility products and developer tools portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sylx – Utility Products & Developer Tools",
    description:
      "Explore utility products, small experiments, and developer tools by Sylx. A focused portfolio of tools that make everyday workflows easier for developers and creators.",
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
  // Check if we are on user's resume page.
  // We must use server-side host detection because Server Components don't have access to `window`.
  const host = headers().get("host") ?? undefined;
  const isResumeBuilder = getSubdomain(host);

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
                name: "Sylx Resume Builder",
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
              name: "Sylx",
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
              name: "Sylx – Utility Products & Developer Tools",
              url: siteUrl,
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
