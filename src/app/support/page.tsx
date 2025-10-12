"use client";

import React from "react";

const SolutionsPage: React.FC = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: "var(--accent-primary)" }}
            >
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <h1
            className="text-5xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Çözümler
          </h1>

          <p
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            İşletmeniz için en uygun çözümleri keşfedin. Rehberlerimizi
            inceleyin, sorularınızın yanıtlarını bulun ve başarıya ulaşın.
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Çözüm arayın veya konu yazın..."
                className="w-full px-6 py-4 rounded-xl border text-lg transition-all duration-300"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-primary)",
                  color: "var(--text-primary)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-primary)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(33, 150, 243, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-primary)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-colors"
                style={{ color: "var(--accent-primary)" }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Çözüm Kategorileri
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              İşletmeniz için en uygun çözümleri kategorilere göre keşfedin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Hızlı Başlangıç",
                description: "Platforma nasıl başlayacağınızı öğrenin",
                articles: "12 rehber",
              },
              {
                icon: "⚙️",
                title: "Sistem Entegrasyonu",
                description: "Mevcut sistemlerinizle entegrasyon",
                articles: "8 rehber",
              },

              {
                icon: "�",
                title: "Analitik & Raporlama",
                description: "Veri analizi ve görselleştirme",
                articles: "11 rehber",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-primary)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px -3px rgba(33, 150, 243, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-primary)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {category.title}
                </h3>
                <p className="mb-3" style={{ color: "var(--text-secondary)" }}>
                  {category.description}
                </p>
                <div
                  className="text-sm font-medium"
                  style={{ color: "var(--accent-primary)" }}
                >
                  {category.articles}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Popüler Çözümler
            </h2>
            <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
              En çok aranan çözümler ve uygulamalar
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "İş süreçlerimi nasıl otomatikleştiririm?",
                answer:
                  "AI Agent'ımız ile rutin görevlerinizi otomatikleştirin. Workflow tasarımı ve entegrasyon rehberlerimizi inceleyin.",
              },
              {
                question: "Müşteri memnuniyetimi nasıl artırırım?",
                answer:
                  "7/24 canlı destek sistemi ve kişiselleştirilmiş müşteri deneyimi çözümlerimizle memnuniyeti %40'a kadar artırın.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <button
                  className="w-full px-6 py-4 text-left font-medium transition-colors"
                  style={{ color: "var(--text-primary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-primary)";
                  }}
                >
                  {faq.question}
                </button>
                <div
                  className="px-6 pb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div
          className="max-w-4xl mx-auto px-6 text-center p-12 rounded-2xl"
          style={{ backgroundColor: "var(--bg-card)" }}
        >
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Özel Çözüm Gereksinimi mi Var?
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Uzman ekibimiz size özel çözümler geliştirebilir. Bize ulaşın!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3 rounded-lg font-medium text-white transition-all duration-300"
              style={{ backgroundColor: "var(--accent-primary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent-hover)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent-primary)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Danışmanlık Al
            </button>
            <button
              className="px-8 py-3 rounded-lg font-medium border transition-all duration-300"
              style={{
                color: "var(--text-primary)",
                borderColor: "var(--border-primary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--bg-secondary)";
                e.currentTarget.style.borderColor = "var(--accent-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "var(--border-primary)";
              }}
            >
              Demo Talep Et
            </button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: "var(--accent-primary)" }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                </svg>
              </div>
              <h3
                className="font-semibold mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                E-posta
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                cozumler@ccpilot.com
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: "var(--accent-primary)" }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <h3
                className="font-semibold mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                Telefon
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                +90 (212) 123 45 67
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: "var(--accent-primary)" }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <h3
                className="font-semibold mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                Adres
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                İstanbul, Türkiye
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
