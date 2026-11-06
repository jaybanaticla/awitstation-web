import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Wordmark } from "@/components/wordmark";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="shell header-bar">
        <Link href="/" className="brand-link">
          <Wordmark variant="header" />
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
