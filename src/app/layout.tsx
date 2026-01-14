import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VITTONIC - Stock Trading",
  description: "Stock trading with a TRULY comprehensive service",
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
