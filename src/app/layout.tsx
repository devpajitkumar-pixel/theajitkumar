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
  metadataBase: new URL("https://theajitkumar.online"),
  title: "Ajit Kumar | Full Stack Developer",
  description:
    "Ajit Kumar is a full stack software engineer building real-world scalable business applications with Next.js, Node.js, MongoDB, and modern deployment infrastructure.",
  keywords: [
    "Ajit Kumar",
    "Full Stack Developer",
    "Next.js Developer",
    "Node.js Engineer",
    "MongoDB",
    "Business Systems",
    "VPS Deployment",
  ],
  openGraph: {
    title: "Ajit Kumar | Full Stack Developer",
    description:
      "Full-stack engineer delivering real-world business systems, dashboards, reporting tools, and scalable deployments.",
    // url: "https://theajitkumar.online",
    url: "http://localhost:3000",
    siteName: "Ajit Kumar Portfolio",
    type: "website",
  },
  icons: {
    // Served from /public/favicon.png — do not use src/app/favicon.ico or it overrides this.
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "32x32" }],
    shortcut: "/favicon.png",
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
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
