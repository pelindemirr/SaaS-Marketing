"use client";

import { usePathname } from "next/navigation";

export const useCurrentPage = () => {
  const pathname = usePathname();

  // Pathname'e göre current page'i belirle
  if (pathname === "/") return "home";
  if (
    pathname.includes("/products") ||
    pathname.includes("/ai-agent") ||
    pathname.includes("/customer-support")
  )
    return "features";
  if (pathname.includes("/pricing") || pathname.includes("/home"))
    return "pricing";
  if (pathname.includes("/support")) return "support";
  if (pathname.includes("/lead-customer")) return "lead-customer";
  if (pathname.includes("/contact")) return "contact";
  if (pathname.includes("/login")) return "login";
  if (pathname.includes("/register")) return "register";

  return "home"; // default
};
