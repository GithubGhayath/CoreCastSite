import type { Metadata, Viewport } from "next";
import { Anton, Instrument_Serif, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Experience } from "@/components/providers/experience";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { siteConfig } from "@/lib/data";
import "./globals.css";
import { almarai, mozillaText } from "./fonts";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s — CORECAST",
  },
  description: siteConfig.description,
  keywords: [
    "marketing agency",
    "branding",
    "visual identity",
    "content creation",
    "reels production",
    "photography",
    "performance marketing",
    "cinematic marketing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1d1c29" },
    { media: "(prefers-color-scheme: light)", color: "#f6f4f9" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeInit = `
try {
  var t = localStorage.getItem("corecast-theme");
  if (t === "light" || t === "dark") document.documentElement.dataset.theme = t;
} catch (e) {}
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone1,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Skur 39, Vippetangen",
    postalCode: "0150",
    addressLocality: "Oslo",
    addressCountry: "NO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={` ${almarai.variable} ${mozillaText.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain">
        <ThemeProvider>
          <Experience>
            <ScrollProgress />
            <Header />
            <main>{children}</main>
            <Footer />
          </Experience>
        </ThemeProvider>
      </body>
    </html>
  );
}
