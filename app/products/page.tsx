import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Brush Types & Custom Brush Manufacturer | FERRABRIO",
  description:
    "Explore industrial wire wheel, cup, disc, pipe and tube, bonded, abrasive nylon, end, roller and strip brushes. Compare formats and request an application-matched custom brush review.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Industrial Brush Families | FERRABRIO",
    description:
      "Browse industrial brush types for deburring, pipe and bore cleaning, surface preparation and line-integrated applications.",
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
    note: "Brush concept · wire form, size and mounting are set for the application.",
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
    note: "Brush concept · fill and profile are selected for the contact area.",
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
    note: "Brush concept · profile and mounting are checked against the drawing.",
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
    note: "Brush concept · abrasive fill, face and mounting follow the process.",
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
    note: "Brush concept · head form and reach are developed from the part geometry.",
    options: ["End, tube or bore access", "Reach and entry path", "Shank or drawing-led fitment"],
    link: "/products/end-and-internal-brushes",
    cta: "Explore end & internal",
  },
  {
    name: "Pipe & tube brushes",
    description:
      "For cleaning and finishing inside tubes, pipes, passages and bores. Match brush head, reach, access path and fill to the opening and workpiece material.",
    image: "/assets/tube-pipe-brushes.jpg",
    alt: "Industrial pipe and tube cleaning brushes with twisted-wire stems and cylindrical brush heads",
    note: "Brush concept · head, reach, fill and attachment are selected for the part.",
    options: ["Tube, pipe or bore cleaning", "Wire or non-metallic fill review", "Reach and tool connection"],
    link: "/products/tube-and-pipe-brushes",
    cta: "Explore pipe & tube brushes",
  },
  {
    name: "Disc & face brushes",
    description:
      "For broad, controlled contact across a face or defined surface area. Select brush profile, fill and mounting around the machine, surface condition and target finish.",
    image: "/assets/disc-face-brushes.jpg",
    alt: "Industrial disc and face brushes in wire and abrasive filament formats with metal hubs",
    note: "Brush concept · geometry, fill and interface are matched to the process.",
    options: ["Face-contact and disc formats", "Wire or abrasive filament", "Hub and machine fit review"],
    link: "/products/disc-and-face-brushes",
    cta: "Explore disc & face brushes",
  },
  {
    name: "Roller & strip brushes",
    description:
      "Continuous or linear brush formats for guided contact across a working width. Share the installation envelope, backing or core, fill and process speed.",
    image: "/assets/roller-strip-brush-concept.jpg",
    alt: "Illustrative concept showing roller and metal-backed strip brush formats",
    note: "Brush concept · dimensions and construction follow the installation brief.",
    options: ["Roller or strip format", "Core, backing and working width", "Fill pattern and mounting"],
    link: "/products/roller-and-strip-brushes",
    cta: "Explore roller & strip",
  },
];

// Treat a repeated image across distinct product families as a build-time
// content error, rather than letting a generic fallback make the catalogue
// look duplicated in production.
const familyImages = families.map(({ image }) => image);
if (new Set(familyImages).size !== familyImages.length) {
  throw new Error("Product families must use distinct images.");
}

if (families.some(({ image, alt }) => !image || !alt.trim())) {
  throw new Error("Every product family must have an image and descriptive alt text.");
}

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
              <p className="eyebrow">EIGHT CONFIGURABLE FAMILIES</p>
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
              <figcaption>Process concept · actual manufacturing and inspection steps follow the approved brush specification.</figcaption>
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

      <footer className="footer"><div className="wrap footer-bottom">© 2026 FERRABRIO · Brush geometry, fill and fitment are finalized for the application.</div></footer>
    </div>
  );
}
