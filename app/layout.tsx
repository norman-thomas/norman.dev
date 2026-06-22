import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://norman.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Norman Thomas — Builder of AI-native products",
  description:
    "Independent engineer and head of engineering. I design and ship products at the edge of what software can do — from agentic AI assistants to personalized travel. Creator of Ergo and Walko.",
  keywords: [
    "Norman Thomas",
    "software engineer",
    "head of engineering",
    "AI apps",
    "mobile apps",
    "Ergo",
    "Walko",
    "freelance engineer",
    "agentic AI",
  ],
  authors: [{ name: "Norman Thomas", url: SITE_URL }],
  creator: "Norman Thomas",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Norman Thomas — Builder of AI-native products",
    description:
      "I design and ship products at the edge of what software can do. Creator of Ergo and Walko.",
    siteName: "Norman Thomas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Norman Thomas — Builder of AI-native products",
    description:
      "I design and ship products at the edge of what software can do. Creator of Ergo and Walko.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      {/* suppressHydrationWarning: browser extensions inject attributes on
          <html>/<body> before hydration, which would otherwise mismatch. */}
      <body suppressHydrationWarning>
        {children}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon='{"token": "d1b43a23f56d4696bf17e540f6f4c3ae"}'
        />
      </body>
    </html>
  );
}
