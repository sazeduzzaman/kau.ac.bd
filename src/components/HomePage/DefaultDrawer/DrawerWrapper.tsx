"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

interface HomePopupData {
  title: string;
  content: string;
  button_name: string;
  button_link: string;
}

const DefaultDrawer = dynamic(
  () => import("@/components/HomePage/DefaultDrawer/DefaultDrawer"),
  { ssr: false }
);

const DrawerWrapper = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [data, setData] = useState<HomePopupData | null>(null);

  useEffect(() => {
    if (!isHomePage) return;

    const fetchPopupData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/home-popup`,
          { cache: "no-store" }
        );

        const result = await res.json();

        console.log("POPUP API RESULT:", result); // 🔥 DEBUG

        // ✅ accept direct or nested data
        const popup = result?.data ?? result;

        if (popup?.title && popup?.content) {
          setData(popup);
        } else {
          setData(null);
        }
      } catch (e) {
        console.error("Popup fetch failed:", e);
        setData(null);
      }
    };

    fetchPopupData();
  }, [isHomePage]);

  // 🔥 ONLY guard that matters
  if (!isHomePage || !data) return null;

  return <DefaultDrawer data={data} />;
};

export default DrawerWrapper;
