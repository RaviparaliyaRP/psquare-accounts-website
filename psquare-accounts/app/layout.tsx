import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Psquare Accounts - Your Trusted Partner for Business Licensing & Registration",
  description: "From Registration to Approval — We Handle It All. Expert business licensing, compliance, and registration services across India. 15+ years of experience, 1500+ happy clients.",
  keywords: "business registration, company registration, GST registration, FSSAI license, trade license, compliance, licensing services, India",
  authors: [{ name: "Psquare Accounts" }],
  creator: "Psquare Accounts",
  publisher: "Psquare Accounts",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://psqaure-accounts-sz3a.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Psquare Accounts - Your Trusted Partner for Business Licensing & Registration",
    description: "From Registration to Approval — We Handle It All. Expert business licensing, compliance, and registration services across India.",
    url: 'https://psqaure-accounts-sz3a.vercel.app',
    siteName: 'Psquare Accounts',
    images: [
      {
        url: '/psqaure-logo.png',
        width: 1200,
        height: 630,
        alt: 'Psquare Accounts Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Psquare Accounts - Your Trusted Partner for Business Licensing & Registration",
    description: "From Registration to Approval — We Handle It All. Expert business licensing, compliance, and registration services across India.",
    images: ['/psqaure-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/psqaure-logo.png" />
        <meta name="theme-color" content="#1E2952" />
        <meta name="msapplication-TileColor" content="#1E2952" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PerformanceOptimizer />
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
