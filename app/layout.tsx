import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator for the web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased", plexSans.variable)}>
        {children}
      </body>
    </html>
  );
}
