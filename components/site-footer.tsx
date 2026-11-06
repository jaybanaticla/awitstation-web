import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <nav className="footer-nav" aria-label="Footer">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
        <p className="footer-meta">
          <span>© Bana Computing</span>
          <span>AwitStation</span>
        </p>
      </div>
    </footer>
  );
}
