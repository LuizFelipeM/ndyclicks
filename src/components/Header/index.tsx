"use client";
import { usePathname } from "next/navigation";
import { PagesHeader } from "./PagesHeader";
import { HomeHeader } from "./HomeHeader";

export const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return <HomeHeader />;
  }

  return <PagesHeader />;
};
