import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  Space_Grotesk,
  Poppins,
  Rajdhani,
  Roboto_Serif,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Shared/Header/Header";
import Footer from "@/components/Shared/Footer/Footer";
import BottomBar from "@/components/Shared/Footer/BottomBar";
import SonarButton from "@/components/Shared/SonarButton/SonarButton";

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
// Initialize the font
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});
// Initialize the font
const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-roboto-serif",
  display: "swap",
});

const shurjo = localFont({
  display: "swap", // bonus tip: improves font loading
  src: [
    {
      path: "./Font/Shurjo/Shurjo-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Font/Shurjo/Shurjo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "খুলনা কৃষি বিশ্ববিদ্যালয় | Khulna Agricultural University",
  description:
    "খুলনা কৃষি বিশ্ববিদ্যালয় বাংলাদেশের অন্যতম প্রধান কৃষি বিশ্ববিদ্যালয়। আমাদের বিশ্ববিদ্যালয় কৃষি, প্রাণি চিকিৎসা, উদ্ভিদ বিজ্ঞান, এবং প্রযুক্তি শিক্ষায় উচ্চমানের শিক্ষা প্রদান করে।",
  keywords: [
    "খুলনা কৃষি বিশ্ববিদ্যালয়",
    "Khulna Agricultural University",
    "Agriculture University Bangladesh",
    "কৃষি শিক্ষা",
    "Agriculture Courses",
    "Khulna University",
  ],
  authors: [
    { name: "Khulna Agricultural University", url: "https://kau.edu.bd" },
  ],
  creator: "Khulna Agricultural University",
  publisher: "Khulna Agricultural University",
  alternates: {
    canonical: "https://kau.edu.bd",
  },
  openGraph: {
    title: "খুলনা কৃষি বিশ্ববিদ্যালয় | Khulna Agricultural University",
    description:
      "খুলনা কৃষি বিশ্ববিদ্যালয় বাংলাদেশের অন্যতম প্রধান কৃষি বিশ্ববিদ্যালয়। আমাদের বিশ্ববিদ্যালয় কৃষি, প্রাণি চিকিৎসা, উদ্ভিদ বিজ্ঞান, এবং প্রযুক্তি শিক্ষায় উচ্চমানের শিক্ষা প্রদান করে।",
    url: "https://kau.edu.bd",
    siteName: "Khulna Agricultural University",
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "খুলনা কৃষি বিশ্ববিদ্যালয় | Khulna Agricultural University",
    description:
      "খুলনা কৃষি বিশ্ববিদ্যালয় বাংলাদেশের অন্যতম প্রধান কৃষি বিশ্ববিদ্যালয়। আমাদের বিশ্ববিদ্যালয় কৃষি, প্রাণি চিকিৎসা, উদ্ভিদ বিজ্ঞান, এবং প্রযুক্তি শিক্ষায় উচ্চমানের শিক্ষা প্রদান করে।",
    site: "@kau_bd",
    creator: "@kau_bd",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${shurjo.className} ${roboto.variable} ${rajdhani.variable} ${robotoSerif.variable} antialiased`}
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
