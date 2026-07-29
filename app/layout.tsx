import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://taherezm.github.io/caramel-cleaners/"),
  title: {
    default: "Caramel Cleaners | Come Home to Clean",
    template: "%s | Caramel Cleaners",
  },
  description:
    "Build a home clean around your space, your priorities, and your schedule with Caramel Cleaners.",
  icons: {
    icon: "brand-mark.png",
    apple: "brand-mark.png",
  },
  openGraph: {
    title: "Caramel Cleaners | Come Home to Clean",
    description:
      "A thoughtful home clean, planned around your space and your priorities.",
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
    title: "Caramel Cleaners | Come Home to Clean",
    description:
      "A thoughtful home clean, planned around your space and your priorities.",
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
      <body>{children}</body>
    </html>
  );
}
