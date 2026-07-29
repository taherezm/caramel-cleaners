import type { Metadata } from "next";
import AnalyticsBridge from "./components/analytics-bridge";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://taherezm.github.io/caramel-cleaners/"),
  title: {
    default: "Caramel Cleaners | Home Cleaning Made Simple",
    template: "%s | Caramel Cleaners",
  },
  description:
    "Compare home cleaning services and book a clean that fits your home with Caramel Cleaners.",
  icons: {
    icon: "brand-mark.png",
    apple: "brand-mark.png",
  },
  openGraph: {
    title: "Caramel Cleaners | Home Cleaning Made Simple",
    description:
      "Compare home cleaning services and book a clean that fits your home.",
    type: "website",
    url: "https://taherezm.github.io/caramel-cleaners/",
    siteName: "Caramel Cleaners",
    images: [
      {
        url: "og.png",
        width: 1200,
        height: 630,
        alt: "Caramel Cleaners — Come home to clean.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caramel Cleaners | Home Cleaning Made Simple",
    description:
      "Compare home cleaning services and book a clean that fits your home.",
    images: ["og.png"],
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
        <AnalyticsBridge />
        {children}
      </body>
    </html>
  );
}
