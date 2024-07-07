import "./globals.css";

import type { Metadata } from "next";
import { Inter, Rubik } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { cn } from "@/lib/utils";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = Rubik({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web3Era",
  description: "Check out the Web3Era Project!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
