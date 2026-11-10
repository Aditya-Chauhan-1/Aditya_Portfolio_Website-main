import "./../src/index.css";
import StyledComponentsRegistry from "../src/lib/StyledComponentsRegistry";
import { seo, SITE_URL } from "../src/data/seo";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: seo.personName,
      alternateName: seo.name,
      url: SITE_URL,
      image: seo.photo,
      jobTitle: seo.jobTitle,
      description: seo.description,
      email: seo.email,
      telephone: seo.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Amroha",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Data Science",
        "Software Engineering",
        "Artificial Intelligence",
        "Full-Stack Development",
        "Technical Corporate Training",
      ],
      sameAs: seo.sameAs,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: seo.name,
      description: seo.description,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: seo.title,
      description: seo.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: seo.image,
        width: 1200,
        height: 630,
      },
    },
  ],
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: seo.name,
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords.split(", "),
  authors: [{ name: seo.name, url: SITE_URL }],
  creator: seo.name,
  publisher: seo.name,
  category: "portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: seo.name,
    url: SITE_URL,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.image,
        alt: `Portrait of ${seo.name}`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.image],
  },
  icons: {
    icon: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-48.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
