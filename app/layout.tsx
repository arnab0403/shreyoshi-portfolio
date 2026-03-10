import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shreyoshi — Reader, Writer, Nutritionist",
  description: "Portfolio of Shreyoshi — a reader at heart, a writer by reflection, and a communicator by craft.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
