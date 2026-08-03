import type { Metadata, Viewport } from "next";
import AnalyticsBridge from "./components/analytics-bridge";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://caramelcleaners.com/"),
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
    "Local one-time and recurring home cleaning for Carmel, Westfield, Zionsville, Noblesville, and Fishers, Indiana.",
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
      "Save with weekly, biweekly, or monthly home cleaning in Carmel, Westfield, Zionsville, Noblesville, and Fishers, Indiana.",
    type: "website",
    url: "https://caramelcleaners.com/",
    siteName: "Caramel Cleaners",
    images: [
      {
        url: "og.png?v=wordmark-20260801",
        width: 1774,
        height: 887,
        alt: "Caramel Cleaners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caramel Cleaners | Home Cleaning Made Simple",
    description:
      "Save with weekly, biweekly, or monthly home cleaning in Carmel, Westfield, Zionsville, Noblesville, and Fishers, Indiana.",
    images: ["og.png?v=wordmark-20260801"],
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
        {children}
      </body>
    </html>
  );
}
