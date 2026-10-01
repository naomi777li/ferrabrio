import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ferrabrio.com"),
  title: "Custom Industrial Wire Brushes & OEM Manufacturer | FERRABRIO",
  description:
    "Custom industrial wire brush manufacturer for wheel, cup, bonded and OEM brush specifications. Send your application for a technical RFQ.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "FERRABRIO | Custom Industrial Wire Brushes",
    description:
      "Tell us the workpiece, machine and target finish. We configure the industrial brush around your process.",
  },
  icons: {
    icon: "/ferrabrio-mark.svg",
    shortcut: "/ferrabrio-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FERRABRIO",
            url: "https://ferrabrio.com/",
            logo: "https://ferrabrio.com/ferrabrio-mark.svg",
            description:
              "Custom industrial wire brush manufacturer for metalworking, surface preparation and process cleaning.",
            email: "info@ferrabrio.com",
          })}
        </Script>
        <Script id="faq-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What information is needed for an industrial brush quotation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Share the workpiece material, contaminant or burr, machine or spindle details, mounting interface, target finish, quantity, drawings or photos where available.",
                },
              },
              {
                "@type": "Question",
                name: "Can Ferrabrio make a custom wire brush?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Wheel, cup, end, roller, strip and bonded brush geometry, filament, trim, density, hub or mounting can be reviewed against the application.",
                },
              },
              {
                "@type": "Question",
                name: "How is the right brush selected?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Selection starts with the process: material to remove, workpiece sensitivity, contact area, machine speed and mounting. The final specification is confirmed before production.",
                },
              },
            ],
          })}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q5M5LW282F"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-Q5M5LW282F');`}
        </Script>
      </body>
    </html>
  );
}
