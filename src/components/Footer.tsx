"use client";

import React from "react";

interface FooterProps {
  showCTA?: boolean;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
}

const Footer: React.FC<FooterProps> = ({
  showCTA = true,
  ctaTitle = "Hemen Başlamaya Hazır mısınız?",
  ctaDescription = "14 gün ücretsiz deneme ile CCPilot'u keşfedin. Kredi kartı gerektirmez.",
  ctaButtonText = "Ücretsiz Denemeyi Başlat",
}) => {
  const footerLinks = {
    product: {
      title: "Ürün",
      links: [
        { name: "Özellikler", href: "/features" },
        { name: "Fiyatlandırma", href: "/pricing" },
        { name: "API", href: "/api" },
        { name: "Entegrasyonlar", href: "/integrations" },
      ],
    },
    company: {
      title: "Şirket",
      links: [
        { name: "Hakkımızda", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Kariyer", href: "/careers" },
        { name: "İletişim", href: "/contact" },
      ],
    },
    support: {
      title: "Destek",
      links: [
        { name: "Yardım Merkezi", href: "/help" },
        { name: "Dokümantasyon", href: "/docs" },
        { name: "Topluluk", href: "/community" },
        { name: "Durum", href: "/status" },
      ],
    },
    legal: {
      title: "Yasal",
      links: [
        { name: "Gizlilik Politikası", href: "/privacy" },
        { name: "Kullanım Şartları", href: "/terms" },
        { name: "Çerez Politikası", href: "/cookies" },
        { name: "KVKK", href: "/kvkk" },
      ],
    },
  };

  return (
    <footer className="bg-secondary">
      {/* CTA Section */}
      {showCTA && (
        <section className="py-16 px-6 bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">{ctaTitle}</h2>
            <p className="text-xl text-secondary mb-8">{ctaDescription}</p>
            <button className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold">
              {ctaButtonText}
            </button>
          </div>
        </section>
      )}

      {/* Footer Links */}
      <div className="border-t border-primary py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* Logo Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center mr-2">
                  <span className="font-bold text-white">CC</span>
                </div>
                <span className="text-xl font-bold text-accent">CCPilot</span>
              </div>
              <p className="text-secondary text-sm mb-4">
                Müşteri iletişiminde yeni dönem. Tüm kanallarınızı tek
                platformda yönetin.
              </p>
              {/* Social Media Links */}
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-primary mb-4">
                {footerLinks.product.title}
              </h3>
              <ul className="space-y-2">
                {footerLinks.product.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-primary mb-4">
                {footerLinks.company.title}
              </h3>
              <ul className="space-y-2">
                {footerLinks.company.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-primary mb-4">
                {footerLinks.support.title}
              </h3>
              <ul className="space-y-2">
                {footerLinks.support.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-primary mb-4">
                {footerLinks.legal.title}
              </h3>
              <ul className="space-y-2">
                {footerLinks.legal.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary text-sm">
              © {new Date().getFullYear()} CCPilot. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <select className="bg-primary text-secondary border border-primary rounded px-3 py-1 text-sm">
                <option value="tr">🇹🇷 Türkçe</option>
                <option value="en">🇺🇸 English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
