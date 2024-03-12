import type { Metadata } from "next";
import "./globals.css";
import '@fontsource/poppins';
import '@fontsource/abril-fatface';
import "@public/styles/font.css";
import "@public/styles/text.css";

export const metadata: Metadata = {
  title: "Portdia | Ditra Amadia Portfolio",
  description: "Ditra Amadia Personal Portfolio",
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
