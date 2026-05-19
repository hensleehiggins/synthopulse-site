import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SynthoPulse | Restaurant Operating Intelligence",
  description:
    "SynthoPulse builds operating intelligence for real-world restaurant teams. KitchenPulse turns sales, events, receipts, weather, menu movement, and staffing signals into clear daily recommendations."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
