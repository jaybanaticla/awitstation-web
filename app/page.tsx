import Image from "next/image";
import { Wordmark } from "@/components/wordmark";
import { siteDescription, siteName, siteUrl } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteName,
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Android",
  description: siteDescription,
  url: siteUrl,
  image: `${siteUrl}/og-awitstation-1200x630.jpg`,
  publisher: {
    "@type": "Organization",
    name: "Bana Computing",
  },
};

export default function HomePage() {
  return (
    <div className="shell home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="kicker">Bana Computing</p>
          <h1 id="home-title">
            <Wordmark variant="hero" />
          </h1>
          <p className="subhead">Bring-your-own karaoke player.</p>
          <p className="lede">
            AwitStation is a karaoke player for files you add — MIDI/KAR, CD+G,
            karaoke video, and packs you import. Song files stay on your device
            for local playback.
          </p>
          <p className="lede lede-quiet">
            We do not bundle, sell or stream a commercial song library. Only add
            files you have the rights to play.
          </p>
        </div>
        <aside className="card library" aria-labelledby="library-title">
          <div className="library-top">
            <Image
              src="/icons/icon-192.png"
              alt=""
              width={40}
              height={40}
              className="library-mark"
            />
            <div>
              <p className="kicker" id="library-title">
                On this device
              </p>
              <p className="library-lead">Local playback</p>
            </div>
          </div>
          <ul>
            <li>MIDI/KAR</li>
            <li>CD+G</li>
            <li>Karaoke video</li>
            <li>Packs you import</li>
          </ul>
          <p className="library-note">Song files are not uploaded.</p>
        </aside>
      </section>

      <section className="section" aria-labelledby="plays-title">
        <h2 id="plays-title">How it plays</h2>
        <ul className="feature-grid">
          <li className="card">
            <h3>Files you add</h3>
            <p>
              MIDI/KAR, CD+G, karaoke video, and packs you import. Only add
              files you have the rights to play.
            </p>
          </li>
          <li className="card">
            <h3>Stays on the device</h3>
            <p>
              Song files stay on your device for local playback. There is no
              AwitStation account, and personal data is not sold. Sing history
              is a local list; clearing app data or uninstalling erases it.
            </p>
          </li>
          <li className="card">
            <h3>Optional LAN remote</h3>
            <p>
              Guests can see song titles to search and reserve. Song files are
              not uploaded to our servers.
            </p>
          </li>
        </ul>
      </section>

      <section className="section" aria-labelledby="network-title">
        <h2 id="network-title">Network and official builds</h2>
        <div className="split">
          <article className="card">
            <h3>Optional network</h3>
            <p>
              When you use them, features may contact update and DLC hosts, an
              optional remote relay, casting services, or MusicBrainz / Cover
              Art Archive for artist artwork. You can turn off remote, casting,
              updates, DLC, and artwork in Settings. Song files are not uploaded
              for those features.
            </p>
          </article>
          <article className="card">
            <h3>Official builds</h3>
            <p>
              AwitStation is owned by Bana Computing. Install official builds
              from our published APK and in-app updater, or Google Play when
              the app is listed there. Optional DLC in Settings is only what
              Bana Computing hosts for AwitStation.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
