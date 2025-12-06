import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";

import Header from "@/components/Shared/Header/Header";
import Footer from "@/components/Shared/Footer/Footer";
import BottomBar from "@/components/Shared/Footer/BottomBar";
import SonarButton from "@/components/Shared/SonarButton/SonarButton";

import { SiteSettingDataset } from "@/lib/apis/SiteInfromationDataSet/SiteInfromationDataSet";

// ========================= FONTS =========================

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const shurjo = localFont({
  variable: "--font-shurjo",
  display: "swap",
  src: [
    { path: "./Font/Shurjo/Shurjo-bold.ttf", weight: "700" },
    { path: "./Font/Shurjo/Shurjo-Regular.ttf", weight: "400" },
  ],
});

// ========================= DYNAMIC METADATA =========================

export async function generateMetadata(): Promise<Metadata> {
  const data = await SiteSettingDataset();

  const settings = data?.settings;
  const seo = settings?.seo;
  const branding = settings?.branding;

  return {
    title: seo?.meta_title ?? "Khulna Agricultural University",
    description:
      seo?.meta_description ??
      "Khulna Agricultural University – Leading agricultural university in Bangladesh",

    keywords: seo?.meta_keyword ?? "",

    alternates: {
      canonical: seo?.site_url ?? "https://kau.ac.bd",
    },

    openGraph: {
      title: seo?.og_title ?? seo?.meta_title,
      description: seo?.og_description ?? seo?.meta_description,
      url: seo?.site_url ?? "https://kau.ac.bd",
      siteName: settings?.website_name ?? "Khulna Agricultural University",
      images: [
        seo?.og_image
          ? `${process.env.NEXT_PUBLIC_BASE_URL}/${seo.og_image}`
          : "/default-og.png",
      ],
      locale: "bn_BD",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: seo?.og_title ?? seo?.meta_title,
      description: seo?.og_description ?? seo?.meta_description,
      images: [
        seo?.og_image
          ? `${process.env.NEXT_PUBLIC_BASE_URL}/${seo.og_image}`
          : "/default-og.png",
      ],
    },

    icons: {
      icon: branding?.favicon
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/${branding.favicon}`
        : "/favicon.ico",
    },
  };
}

// ============================= LAYOUT =============================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${shurjo.variable} ${roboto.variable} antialiased`}
      >
        <Header />
        {children}
        <SonarButton />
        <Footer />
        <BottomBar />
      </body>
    </html>
  );
}
