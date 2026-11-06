import type { Metadata } from "next";
import { LegalArticle } from "@/components/legal-article";
import { terms } from "@/lib/legal";
import { ogImage, siteName, siteUrl } from "@/lib/site";

const canonical = `${siteUrl}/terms`;
const description = "AwitStation Terms of Use, Version 2, from Bana Computing.";

export const metadata: Metadata = {
  title: "Terms of Use",
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    siteName,
    title: "Terms of Use — AwitStation",
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use — AwitStation",
    description,
    images: [ogImage.url],
  },
};

export default function TermsPage() {
  return (
    <div className="shell">
      <LegalArticle document={terms} />
    </div>
  );
}
