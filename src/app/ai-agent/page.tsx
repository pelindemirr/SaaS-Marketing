"use client";

import React from "react";

const AIAgentPage: React.FC = () => {
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
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
            </div>
          </div>

          <h1
            className="text-5xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            AI Agent
          </h1>

          <p
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Akıllı müşteri hizmetleri robotu ile müşterilerinizin sorularını
            7/24 yanıtlayın. Doğal dil işleme teknolojisi ile insan benzeri
            konuşmalar yapın.
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
              Ücretsiz Dene
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
              Demo İzle
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAgentPage;
