import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="shell not-found">
      <p className="kicker">404</p>
      <h1>This page is not on AwitStation.</h1>
      <p>The player, terms, and privacy policy are on the pages below.</p>
      <p>
        <Link href="/">Back to AwitStation</Link>
      </p>
    </div>
  );
}
