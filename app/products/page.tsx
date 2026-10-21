import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Brush Types & Custom Brush Manufacturer | FERRABRIO",
  description:
    "Compare industrial wheel, cup, bonded, abrasive nylon, end, internal, roller and strip brush families. Match brush design to the workpiece, machine and finish.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Industrial Brush Families | FERRABRIO",
    description:
      "Explore brush geometries for surface preparation, deburring, cleaning and process applications.",
    url: "/products",
    type: "website",
  },
};

const families = [
  {
    name: "Industrial wheel brushes",
    description:
      "For deburring, weld-spatter cleanup, scale removal and surface preparation. Review crimped or twist-knot construction against the workpiece and machine.",
    image: "/assets/twist-knot-wheel.jpg",
    alt: "Twist-knot wire wheel brush, representative product image",
    note: "Representative product image; final wire, geometry and mounting are application-reviewed.",
    link: "/products/industrial-wheel-brushes",
    cta: "Explore wheel brushes",
  },
  {
    name: "Cup brushes",
    description:
      "A practical format for broader face contact on welds, castings and prepared surfaces. Start with machine interface, work area and the finish required.",
    image: "/assets/cup-brush-nylon.jpg",
    alt: "Abrasive nylon cup brush, representative product image",
    note: "Reference image; fill and construction are selected for the intended process.",
    link: "/products/custom-cup-brushes",
    cta: "Explore cup brushes",
  },
  {
    name: "Bonded industrial brushes",
    description:
      "Profiled or fixture-integrated brush assemblies for controlled contact. Share the base shape, mounting points and surface that needs attention.",
    image: "/assets/bonded-flat-brush.jpg",
    alt: "Flat bonded industrial brush, representative product image",
    note: "Representative product image; mounting and brush profile are confirmed by drawing review.",
    link: "/products/bonded-industrial-brushes",
    cta: "Explore bonded brushes",
  },
  {
    name: "Abrasive nylon brushes",
    description:
      "A non-metallic abrasive-filament direction for cleaning and finishing work. Grain, filament, contact pressure and substrate compatibility need review together.",
    image: "/assets/cup-brush-nylon.jpg",
    alt: "Abrasive nylon cup brush for industrial surface finishing",
    note: "Material compatibility and the required finish should be validated for each application.",
    link: "/products/abrasive-nylon-brushes",
    cta: "Explore abrasive nylon",
  },
  {
    name: "End & internal brushes",
    description:
      "For localized work on edges, bores, tubes and restricted profiles. Specify the access opening, working depth, entry direction and tool interface.",
    image: "/assets/end-internal-brush-concept.jpg",
    alt: "Illustrative concept of end and internal tube brush formats",
    note: "Illustrative product direction; not a verified production model.",
    link: "/products/end-and-internal-brushes.html",
    cta: "Explore end & internal",
  },
  {
    name: "Roller & strip brushes",
    description:
      "Continuous or linear brush formats for guided contact across a working width. Share the installation envelope, backing or core, fill and process speed.",
    image: "/assets/roller-strip-brush-concept.jpg",
    alt: "Illustrative concept showing roller and metal-backed strip brush formats",
    note: "Illustrative product direction; dimensions and construction are confirmed against the installation.",
    link: "/products/roller-and-strip-brushes.html",
    cta: "Explore roller & strip",
  },
];

export default function ProductsPage() {
  return (
    <div className="brush-directory">
      <header className="site-header">
        <div className="wrap nav">
          <Link className="brand" href="/" aria-label="Ferrabrio home">
            <span className="brand-mark">FB</span>
            <span>FERRABRIO<br /><small>INDUSTRIAL BRUSHES</small></span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            <Link href="/">Home</Link>
            <Link href="/products" aria-current="page">Product families</Link>
            <Link href="/#custom">Customization</Link>
            <Link href="/#insights">Insights</Link>
          </nav>
          <Link className="btn" href="/#rfq">Request a technical review</Link>
        </div>
      </header>

      <main>
        <section className="brush-directory-hero">
          <div className="wrap">
            <p className="crumbs"><Link href="/">Home</Link> / Product families</p>
            <p className="eyebrow">INDUSTRIAL BRUSH CATALOGUE</p>
            <h1>Choose the brush geometry around the job.</h1>
            <p className="brush-directory-lead">
              The right family depends on the contact area, material to remove, workpiece sensitivity,
              machine interface and target finish. Use these categories to find a starting point;
              confirm the final construction against your application.
            </p>
          </div>
        </section>

        <section className="brush-directory-catalog" aria-labelledby="brush-families-title">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">SIX CONFIGURABLE FAMILIES</p>
              <h2 id="brush-families-title">Start with access, contact and process.</h2>
              <p>Compare established brush forms, then send a drawing, sample or process photo for a focused technical review.</p>
            </div>
            <div className="brush-family-grid">
              {families.map((family) => (
                <article className="brush-family-card" key={family.name}>
                  <a className="brush-family-image" href={family.link} aria-label={family.cta}>
                    <Image src={family.image} alt={family.alt} width={1200} height={900} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" unoptimized />
                  </a>
                  <div className="brush-family-copy">
                    <p className="eyebrow">APPLICATION-LED SELECTION</p>
                    <h2><a href={family.link}>{family.name}</a></h2>
                    <p>{family.description}</p>
                    <small>{family.note}</small>
                    <a className="brush-family-link" href={family.link}>{family.cta} <span aria-hidden="true">→</span></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="brush-directory-selection">
          <div className="wrap brush-directory-selection-grid">
            <div>
              <p className="eyebrow">MAKE THE RFQ USEFUL</p>
              <h2>What to include when you ask for a brush.</h2>
              <p>A few process details help the team review the right family and avoid guessing at a catalogue size.</p>
            </div>
            <ul>
              <li><strong>Workpiece:</strong> material, shape, coating, contamination or burr.</li>
              <li><strong>Operation:</strong> cleaning, deburring, weld cleanup, blending or finishing.</li>
              <li><strong>Machine:</strong> tool or spindle, operating conditions and mounting interface.</li>
              <li><strong>Target:</strong> the area to reach, finish required and surfaces to protect.</li>
              <li><strong>Reference:</strong> drawing, photo, sample brush, expected quantity and timing.</li>
            </ul>
          </div>
        </section>

        <section className="brush-directory-cta">
          <div className="wrap">
            <div><h2>Not sure which family fits?</h2><p>Send the workpiece and process. Ferrabrio can review the brush direction and confirm the design details before quotation.</p></div>
          <Link className="btn" href="/#rfq">Start a technical RFQ</Link>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="wrap footer-bottom">© 2026 FERRABRIO · Product images are representative or illustrative as captioned; final specifications require application review.</div></footer>
    </div>
  );
}
