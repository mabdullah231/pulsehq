import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PulseHQ – Real‑time Work Insights",
    template: "%s | PulseHQ",
  },
  description: "PulseHQ automatically derives insights from your projects and tasks. No manual tracking, no surveillance. Get clarity into how your organization works.",
  icons: {
    icon: "/logo.ico", // Updated to use logo.ico in public folder
  },
  openGraph: {
    title: "PulseHQ – Real‑time Work Insights",
    description: "See how your organization actually works with automatic work signals.",
    url: "https://pulsehq.vercel.app",
    siteName: "PulseHQ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseHQ – Real‑time Work Insights",
    description: "See how your organization actually works with automatic work signals.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}