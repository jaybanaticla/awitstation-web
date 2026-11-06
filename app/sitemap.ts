import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-06");
  return [
    { url: siteUrl, lastModified },
    { url: `${siteUrl}/terms`, lastModified },
    { url: `${siteUrl}/privacy`, lastModified },
  ];
}
