import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KodNest Careers",
  description: "Welcome to KodNest Careers",
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
