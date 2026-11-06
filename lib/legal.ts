export type LegalSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type LegalDocument = {
  title: string;
  version: string;
  intro: string;
  sections: readonly LegalSection[];
  copyright: string;
};

/** Version 2 terms, copied from the in-app text. */
export const terms: LegalDocument = {
  title: "AwitStation Terms of Use",
  version: "Version 2 · Bana Computing",
  intro:
    "By tapping I Agree you accept these Terms. If you do not agree, Exit and do not use the app.",
  sections: [
    {
      heading: "Your content",
      paragraphs: [
        "AwitStation is a karaoke player for files you add (MIDI/KAR, CD+G, karaoke video, and packs you import). We do not bundle, sell or stream a commercial song library. Only add files you have the rights to play. Song files stay on your device for local playback. Guests using the optional LAN remote can see song titles to search and reserve; we do not upload your song files to our servers.",
      ],
    },
    {
      heading: "The app",
      paragraphs: [
        "AwitStation is owned by Bana Computing. Install official builds from our channels: our published APK and in-app updater, or Google Play when the app is listed there. Names and trademarks of other products belong to their owners; no affiliation is implied (including SongHub). Optional DLC in Settings is only what Bana Computing hosts for AwitStation — not a third-party song marketplace.",
        "The app is provided “as is”. To the fullest extent allowed by law, Bana Computing is not liable for lost data, interrupted events, or damages from use of the app or files you provide.",
      ],
    },
    {
      heading: "Changes",
      paragraphs: [
        "If we change these Terms in a way that needs a new agreement, the app will ask you to Agree again.",
      ],
    },
  ],
  copyright: "© Bana Computing.",
};

/** Version 2 privacy policy, copied from the in-app text. */
export const privacy: LegalDocument = {
  title: "AwitStation Privacy Policy",
  version: "Version 2 · Bana Computing",
  intro:
    "By tapping I Agree you acknowledge this policy.",
  sections: [
    {
      heading: "On your device",
      paragraphs: [
        "Song library paths and metadata stay on the device (and storage you grant). Sing history is a local list of songs you started; clearing app data or uninstalling erases it. Settings, including that you agreed to the Terms, stay in the app’s private storage. We do not create an AwitStation account and we do not sell personal data.",
      ],
    },
    {
      heading: "Optional network",
      paragraphs: [
        "When you use them, features may contact our update and DLC hosts, an optional remote relay, casting services, or (if enabled) MusicBrainz / Cover Art Archive for artist artwork. Song files are not uploaded for those features.",
      ],
    },
    {
      heading: "Choices",
      paragraphs: [
        "You can turn off remote, casting, updates (where offered), DLC and artwork in Settings, clear Sing history, remove downloads, or clear app data / uninstall.",
      ],
    },
  ],
  copyright: "© Bana Computing.",
};
