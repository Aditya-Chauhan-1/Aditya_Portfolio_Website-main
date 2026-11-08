import "./../src/index.css";
import StyledComponentsRegistry from "../src/lib/StyledComponentsRegistry";
import { seo, SITE_URL } from "../src/data/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords.split(", "),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: seo.title,
    description: seo.description,
    images: [seo.image],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.image],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "48x48" },
      { url: "/favicon-32.png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
