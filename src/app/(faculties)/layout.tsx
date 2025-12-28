// app/[slug]/layout.tsx
import "@/app/(main)/globals.css";
import { ReactNode } from "react";
import localFont from "next/font/local";
import { Space_Grotesk, Poppins } from "next/font/google";
import FacultiesHeader from "./components/Shared/Header/FacultiesHeader";
import FacultiesFooter from "./components/Shared/Footer/FacultiesFooter";
/* -----------------------------
   METADATA (TITLE TEMPLATE)
----------------------------- */
/* -----------------------------
   TYPES
----------------------------- */
interface LayoutProps {
  params: { slug: string };
  children: ReactNode;
}

/* -----------------------------
   DYNAMIC METADATA
----------------------------- */

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
    { path: "../Font/Shurjo/Shurjo-Regular.ttf", weight: "400" },
    { path: "../Font/Shurjo/Shurjo-bold.ttf", weight: "700" },
  ],
});

interface FacultyLayout {
  children: ReactNode;
}

export default function FacultyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${shurjo.variable} ${roboto.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen bg-white faculties-layout-container">
          <FacultiesHeader />
          <main className="flex-1">{children}</main>
          <FacultiesFooter />
        </div>
      </body>
    </html>
  );
}
