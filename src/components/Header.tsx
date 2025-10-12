"use client";

import React, { useState, useRef, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { useCurrentPage } from "@/hooks/useCurrentPage";

const Header: React.FC = () => {
  const currentPage = useCurrentPage();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Dropdown menü öğeleri
  const dropdownItems = [
    {
      name: "AI Agent",
      href: "/ai-agent",
      description: "Akıllı müşteri hizmetleri robotu",
    },
    {
      name: "Müşteri Destek",
      href: "/customer-support",
      description: "7/24 canlı destek sistemi",
    },
  ];

  const navigationItems = [
    { name: "Anasayfa", href: "/", id: "home" },
    { name: "Ürünler", href: "/products", id: "features", hasDropdown: true },
    { name: "Fiyatlandırma", href: "/pricing", id: "pricing" },
    { name: "Çözümler", href: "/support", id: "support" },
    { name: "İletişim", href: "/contact", id: "contact" },
  ];

  // Dropdown dışına tıklayınca kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="border-b border-primary bg-primary sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-accent">CCPilot</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                ref={item.hasDropdown ? dropdownRef : undefined}
              >
                {item.hasDropdown ? (
                  // Dropdown menü olan öğe
                  <div
                    className="flex items-center cursor-pointer"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <span
                      className={`nav-link flex items-center ${
                        currentPage === item.id ? "active" : ""
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          isProductsOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>

                    {/* Dropdown Menü */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-72 transition-all duration-300 ease-in-out ${
                        isProductsOpen
                          ? "opacity-100 visible transform translate-y-0"
                          : "opacity-0 invisible transform -translate-y-2"
                      }`}
                      style={{
                        backgroundColor: "var(--bg-card)",
                        borderColor: "var(--border-primary)",
                        border: "1px solid",
                        borderRadius: "8px",
                        boxShadow:
                          "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }}
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      <div className="py-2">
                        {dropdownItems.map((dropdownItem, index) => (
                          <a
                            key={index}
                            href={dropdownItem.href}
                            className="flex items-center px-4 py-3 transition-all duration-200"
                            style={{
                              color: "var(--text-primary)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "var(--bg-secondary)";
                              e.currentTarget.style.color =
                                "var(--accent-primary)";
                              e.currentTarget.style.borderRadius = "6px";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor =
                                "transparent";
                              e.currentTarget.style.color =
                                "var(--text-primary)";
                              e.currentTarget.style.borderRadius = "0px";
                            }}
                          >
                            <div className="flex-shrink-0 mr-3">
                              <div
                                className="w-8 h-8 rounded-md flex items-center justify-center"
                                style={{
                                  backgroundColor: "var(--accent-primary)",
                                }}
                              >
                                {index === 0 ? (
                                  <svg
                                    className="w-4 h-4 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                  </svg>
                                ) : (
                                  <svg
                                    className="w-4 h-4 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                                  </svg>
                                )}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-sm">
                                {dropdownItem.name}
                              </div>
                              <div
                                className="text-xs mt-1"
                                style={{ color: "var(--text-secondary)" }}
                              >
                                {dropdownItem.description}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Normal menü öğesi
                  <a
                    href={item.href}
                    className={`nav-link ${
                      currentPage === item.id ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="btn-secondary">Giriş Yap</button>
            <button className="btn-primary px-6 py-2 rounded-lg">
              Ücretsiz Dene
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
              aria-label="Menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.id}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className="w-full flex items-center justify-between py-2 px-4 text-left transition-colors"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isProductsOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Mobile Dropdown */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isProductsOpen
                          ? "max-h-48 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="ml-4 space-y-1">
                        {dropdownItems.map((dropdownItem, index) => (
                          <a
                            key={index}
                            href={dropdownItem.href}
                            className="block py-2 px-4 transition-colors"
                            style={{ color: "var(--text-secondary)" }}
                            onTouchStart={(e) => {
                              e.currentTarget.style.color =
                                "var(--accent-primary)";
                            }}
                          >
                            <div className="font-medium text-sm">
                              {dropdownItem.name}
                            </div>
                            <div className="text-xs mt-1">
                              {dropdownItem.description}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block py-2 px-4 transition-colors"
                    style={{ color: "var(--text-primary)" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="pt-4 px-4 space-y-2">
              <button className="w-full btn-secondary py-2 rounded-lg">
                Giriş Yap
              </button>
              <button className="w-full btn-primary py-2 rounded-lg">
                Ücretsiz Dene
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
