"use client";

import React, { useState, useRef, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { useCurrentPage } from "@/hooks/useCurrentPage";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  // ... state'ler ve diğer kodlar aynı kalıyor ...
  const currentPage = useCurrentPage();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const router = useRouter();

  const navigationItems = [
    { name: "Anasayfa", href: "/", id: "home" },
    {
      name: "Ürünler",
      href: "/products",
      id: "features",
      hasDropdown: true,
      dropdownItems: [
        { name: "AI Agent", href: "/ai-agent", description: "Akıllı müşteri hizmetleri robotu" },
        { name: "Müşteri Destek", href: "/customer-support", description: "7/24 canlı destek sistemi" },
      ],
    },
    { name: "Fiyatlandırma", href: "/pricing", id: "pricing" },
    {
      name: "Çözümler",
      href: "/support",
      id: "support",
      hasDropdown: true,
      dropdownItems: [
        { name: "Müşterri Çözümleri", href: "/support", description: "Satışlarınızı artırın" },
        { name: "Potansiyel Müşteri", href: "/lead-customer", description: "Kullanıcı memnuniyeti sağlayın" },
      ],
    },
    { name: "İletişim", href: "/contact", id: "contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };


  return (
    <header className="border-b border-primary bg-primary sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
            {/* ... Logo, Desktop Nav ve Sağ Butonlar aynı ... */}
            <div className="flex items-center">
            <h1 className="text-2xl font-bold text-accent">CCPilot</h1>
          </div>

          <nav className="hidden md:flex space-x-8" ref={navRef}>
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.id)}
                onMouseLeave={() => item.hasDropdown && setOpenDropdown(null)}
              >
                {item.hasDropdown ? (
                  <>
                    <button className={`nav-link flex items-center cursor-default ${currentPage === item.id ? "active" : ""}`}>
                      {item.name}
                      <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ${openDropdown === item.id ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-lg border border-[var(--border-primary)] bg-[var(--bg-card)] shadow-lg transition-all duration-300 ease-in-out ${
                        openDropdown === item.id
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      <div className="p-2">
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <a key={index} href={dropdownItem.href} className="group flex items-center p-3 rounded-md transition-colors duration-200 hover:bg-[var(--bg-secondary)]">
                            <div className="flex-1">
                              <div className="font-medium text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                                {dropdownItem.name}
                              </div>
                              <div className="text-xs mt-1 text-[var(--text-secondary)]">
                                {dropdownItem.description}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a href={item.href} className={`nav-link ${currentPage === item.id ? "active" : ""}`}>
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <button className="btn-secondary cursor-pointer" onClick={() => router.push("/login")}>Giriş Yap</button>
              <button className="btn-primary px-6 py-2 rounded-lg cursor-pointer" onClick={() => router.push("/register")}>Üyelik oluştur</button>
            </div>
            <div className="flex items-center space-x-2 md:hidden">
              <ThemeToggle />
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]" aria-label="Menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* --- MOBİL MENÜ DÜZELTMESİ BURADA --- */}
        <div 
          className={`md:hidden transition-[max-height] duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-[600px]' : 'max-h-0' // DÜZELTME: max-h-screen yerine sabit ama büyük bir değer
          }`}
        >
          <nav className="py-4 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.id}>
                {item.hasDropdown ? (
                  <>
                    <button onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)} className="w-full flex items-center justify-between py-2 px-4 text-left text-[var(--text-primary)]">
                      <span>{item.name}</span>
                      <svg className={`h-4 w-4 transition-transform ${openDropdown === item.id ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div 
                      className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${ // DÜZELTME: Daha spesifik transition
                        openDropdown === item.id ? 'max-h-48' : 'max-h-0'
                      }`}
                    >
                      <div className="ml-4 my-2 space-y-1 border-l-2 border-slate-200 dark:border-slate-700">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <a key={dropdownItem.name} href={dropdownItem.href} onClick={handleMobileLinkClick} className="block py-2 pl-4 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)]">
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a href={item.href} onClick={handleMobileLinkClick} className="block py-2 px-4 text-[var(--text-primary)]">
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4 px-4 space-y-2">
              <button className="w-full btn-secondary py-2 rounded-lg cursor-pointer" onClick={()=> router.push("/login")}>Giriş Yap</button>
              <button className="w-full btn-primary py-2 rounded-lg cursor-pointer" onClick={() => router.push("/register")}>Üyelik oluştur</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;