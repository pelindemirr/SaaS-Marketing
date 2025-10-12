"use client";

import React from "react";

const CustomerSupportPage: React.FC = () => {
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
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
              </svg>
            </div>
          </div>

          <h1
            className="text-5xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Müşteri Destek
          </h1>

          <p
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            7/24 canlı müşteri destek sistemi ile müşterilerinize kesintisiz
            hizmet sağlayın. Omnichannel destek ile tüm kanallardan tek noktada
            yönetin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-3 rounded-lg font-medium transition-all duration-300 text-white"
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
              Hemen Başla
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
              Canlı Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerSupportPage;
