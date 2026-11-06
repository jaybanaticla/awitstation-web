import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ogImage, siteDescription, siteName, siteUrl } from "@/lib/site";
import { themeInitScript } from "@/lib/theme-script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AwitStation — BYO karaoke player",
    template: "%s — AwitStation",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "Bana Computing" }],
  creator: "Bana Computing",
  publisher: "Bana Computing",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "AwitStation — BYO karaoke player",
    description: siteDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "AwitStation — BYO karaoke player",
    description: siteDescription,
    images: [ogImage.url],
  },
  icons: {
    icon: [
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F172A",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <Script id="awit-theme" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <link
          rel="preload"
          href="/fonts/pjs-latin-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/pjs-latin-800.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
