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
    options: ["Crimped or twist-knot wire", "Steel or stainless fill", "Arbor and hub fitment"],
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
    options: ["Wire or nylon fill", "Cup or bevel profile", "Machine interface review"],
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
    options: ["Custom block or segment", "Profile and fill pattern", "Mounting from drawing"],
    link: "/products/bonded-industrial-brushes",
    cta: "Explore bonded brushes",
  },
  {
    name: "Abrasive nylon brushes",
    description:
      "A non-metallic abrasive-filament direction for cleaning and finishing work. Grain, filament, contact pressure and substrate compatibility need review together.",
    image: "/assets/abrasive-nylon-disc-concept.png",
    alt: "Illustrative concept of a flat abrasive nylon disc brush with a metal mounting hub",
    note: "Illustrative product concept; select abrasive fill, face geometry and mounting for the process.",
    options: ["Abrasive nylon filament", "Disc or face-contact formats", "Finish and substrate review"],
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
    options: ["End, tube or bore access", "Reach and entry path", "Shank or drawing-led fitment"],
    link: "/products/end-and-internal-brushes",
    cta: "Explore end & internal",
  },
  {
    name: "Roller & strip brushes",
    description:
      "Continuous or linear brush formats for guided contact across a working width. Share the installation envelope, backing or core, fill and process speed.",
    image: "/assets/roller-strip-brush-concept.jpg",
    alt: "Illustrative concept showing roller and metal-backed strip brush formats",
    note: "Illustrative product direction; dimensions and construction are confirmed against the installation.",
    options: ["Roller or strip format", "Core, backing and working width", "Fill pattern and mounting"],
    link: "/products/roller-and-strip-brushes",
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
                    <ul className="brush-family-options" aria-label={`Common configuration choices for ${family.name}`}>
                      {family.options.map((option) => <li key={option}>{option}</li>)}
                    </ul>
                    <small>{family.note}</small>
                    <a className="brush-family-link" href={family.link}>{family.cta} <span aria-hidden="true">→</span></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="brush-directory-build" aria-labelledby="brush-build-title">
          <div className="wrap">
            <div className="section-head">
              <p className="eyebrow">MANUFACTURING &amp; PROCESS CONTROL</p>
              <h2 id="brush-build-title">From application brief to a repeatable brush build.</h2>
              <p>Each family uses different construction methods. The typical OEM workflow below keeps fitment, fill and acceptance points clear before a production order.</p>
            </div>
            <figure className="brush-process-visual">
              <Image
                src="/assets/brush-engineering-process-illustration.png"
                alt="Illustrative view of industrial brush components being reviewed and checked at a workbench"
                width={1536}
                height={1024}
                sizes="(max-width: 900px) 100vw, 1100px"
                unoptimized
              />
              <figcaption>Illustrative process visualization—not a photograph of Ferrabrio’s facility or a verified production run. Actual manufacturing and inspection steps depend on the confirmed brush specification.</figcaption>
            </figure>
            <ol className="brush-build-steps">
              <li><span>01</span><div><h3>Review drawing or sample</h3><p>Confirm workpiece, access path, machine interface and the surface result required.</p></div></li>
              <li><span>02</span><div><h3>Define fill and construction</h3><p>Select brush geometry, filament family, trim, density and core or hub around the job.</p></div></li>
              <li><span>03</span><div><h3>Confirm sample references</h3><p>Agree the fit, contact profile and inspection points for the intended application before repeat production.</p></div></li>
              <li><span>04</span><div><h3>Pack to the supply route</h3><p>Set labels, quantity per pack and export-carton requirements with the buyer.</p></div></li>
            </ol>
            <p className="brush-build-note">Typical manufacturing path; exact operations and inspection criteria vary by brush design and are confirmed with the order specification.</p>
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
