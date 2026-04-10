import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Engine AI - Run Your Business on AI",
  description: "The infrastructure platform that positions your business to thrive in the AI era. Scalable, secure, and built for the future.",
  keywords: ["AI", "infrastructure", "B2B", "enterprise AI", "LLM", "AI platform"],
  openGraph: {
    title: "Engine AI - Run Your Business on AI",
    description: "The infrastructure platform that positions your business to thrive in the AI era.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
