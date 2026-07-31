import type { Metadata, Viewport } from "next";
import AnalyticsBridge from "./components/analytics-bridge";
import ScrollReveal from "./components/scroll-reveal";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://taherezm.github.io/caramel-cleaners/"),
  applicationName: "Caramel Cleaners",
  manifest: "site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Caramel Cleaners",
    statusBarStyle: "default",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  title: {
    default: "Caramel Cleaners | Home Cleaning Made Simple",
    template: "%s | Caramel Cleaners",
  },
  description:
    "Book home cleaning with vetted, extensively background-checked professionals covered by liability insurance.",
  icons: {
    icon: [
      {
        url: "favicon.ico?v=circular-20260731",
        sizes: "any",
      },
      {
        url: "favicon.png?v=circular-20260731",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "favicon.ico?v=circular-20260731",
    apple: [
      {
        url: "apple-touch-icon.png?v=circular-20260731",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Caramel Cleaners | Home Cleaning Made Simple",
    description:
      "Home cleaning from vetted, extensively background-checked professionals covered by liability insurance.",
    type: "website",
    url: "https://taherezm.github.io/caramel-cleaners/",
    siteName: "Caramel Cleaners",
    images: [
      {
        url: "og.png?v=text-only-20260728",
        width: 1200,
        height: 630,
        alt: "Caramel Cleaners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caramel Cleaners | Home Cleaning Made Simple",
    description:
      "Home cleaning from vetted, extensively background-checked professionals covered by liability insurance.",
    images: ["og.png?v=text-only-20260728"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#f7f2eb",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AnalyticsBridge />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
