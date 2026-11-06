import type { LegalDocument } from "@/lib/legal";

function sectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function LegalArticle({ document }: { document: LegalDocument }) {
  return (
    <article className="legal">
      <h1>{document.title}</h1>
      <p className="legal-version">{document.version}</p>
      <p>{document.intro}</p>
      {document.sections.map((section) => {
        const id = sectionId(section.heading);
        return (
          <section key={id} aria-labelledby={id}>
            <h2 id={id}>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        );
      })}
      <p className="legal-copy">{document.copyright}</p>
    </article>
  );
}
