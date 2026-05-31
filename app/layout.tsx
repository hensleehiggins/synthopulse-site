import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SynthoPulse | Restaurant Operating Intelligence",
  description:
    "SynthoPulse builds operating intelligence for real-world restaurant teams. KitchenPulse turns sales, events, receipts, weather, menu movement, and staffing signals into clear daily recommendations.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/kitchenpulse-pwa-icon-512.png",
    apple: "/kitchenpulse-pwa-icon-512.png",
  },
  appleWebApp: {
    capable: true,
    title: "KitchenPulse",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#03101C",
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
