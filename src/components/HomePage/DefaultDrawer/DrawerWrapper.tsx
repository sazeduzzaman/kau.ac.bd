"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamically import the drawer to ensure it's client-side only
const DefaultDrawer = dynamic(
  () => import("@/components/HomePage/DefaultDrawer/DefaultDrawer"),
  { 
    ssr: false, // Disable SSR for this component
    loading: () => null // Don't show anything while loading
  }
);

const DrawerWrapper = () => {
  const pathname = usePathname();
  
  // Only show drawer on home page
  const isHomePage = pathname === "/";
  
  if (!isHomePage) return null;
  
  return <DefaultDrawer />;
};

export default DrawerWrapper;