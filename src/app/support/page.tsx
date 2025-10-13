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
    </div>
  );
};

export default SolutionsPage;
