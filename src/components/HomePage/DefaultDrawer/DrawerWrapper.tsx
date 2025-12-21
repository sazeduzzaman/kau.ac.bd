"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import the drawer (client-side only)
const DefaultDrawer = dynamic(
  () => import("@/components/HomePage/DefaultDrawer/DefaultDrawer"),
  {
    ssr: false,
    loading: () => null,
  }
);

const DrawerWrapper = () => {
  const pathname = usePathname();
const [data, setData] = useState(null);
  // Only show drawer on home page
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;

    const fetchPopupData = async () => {
      try {
        const res = await fetch(
          "https://admin.kau.khandkershahed.com/api/v1/home-popup"
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Failed to fetch home popup:", error);
      }
    };

    fetchPopupData();
  }, [isHomePage]);

  if (!isHomePage) return null;

  return <DefaultDrawer data={data} />;
};

export default DrawerWrapper;
