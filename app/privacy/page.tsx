import type { Metadata } from "next";
import { LegalArticle } from "@/components/legal-article";
import { privacy } from "@/lib/legal";
import { ogImage, siteName, siteUrl } from "@/lib/site";

const canonical = `${siteUrl}/privacy`;
const description = "AwitStation Privacy Policy, Version 2, from Bana Computing.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    siteName,
    title: "Privacy Policy — AwitStation",
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — AwitStation",
    description,
    images: [ogImage.url],
  },
};

export default function PrivacyPage() {
  return (
    <div className="shell">
      <LegalArticle document={privacy} />
    </div>
  );
}
