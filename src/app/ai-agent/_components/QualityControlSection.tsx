"use client";

import React from "react";

const QualityControlSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-center">
          {/* Right Side - Content */}
          <div>
            <div className="flex items-center mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                style={{ backgroundColor: "var(--accent-primary)" }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h2
                className="text-4xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Kalite ve tutarlılık için
                <br />
                <span style={{ color: "var(--accent-primary)" }}>
                  kontrolde kalın
                </span>
              </h2>
            </div>

            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Yanıtların tonunu ve kalitesini kendi içeriğinize göre
              belirlersiniz ve gerektiğinde bir takım arkadaşıyla kontrol
              edersiniz, böylece yanıtlarınız insani olur, robotik olmaz.
            </p>

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
              Demo başlat
            </button>
          </div>
          {/* Left Side - Control Panel */}
          <div className="relative max-w-lg mx-auto lg:mx-0">
            <div
              className="rounded-2xl p-8 sm:p-8 shadow-2xl border"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-primary)",
              }}
            >
              {/* Top Badge */}
              <div className="flex justify-end mb-4">
                <div
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    color: "var(--text-secondary)",
                  }}
                >
                  MARKA KİMLİĞİ
                </div>
              </div>

              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "var(--accent-primary)" }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                    </svg>
                  </div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    AI Yardımcım
                  </h3>
                </div>
                <div
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: "var(--accent-primary)",
                    color: "white",
                  }}
                >
                  SES TONU
                </div>
              </div>

              {/* Communication Style */}
              <div className="mb-8">
                <label
                  className="block text-sm font-medium mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  İletişim stili
                </label>
                <div
                  className="p-4 rounded-lg border"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-primary)",
                  }}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Kısa, öz ve empatik olun
                  </p>
                </div>
              </div>

              {/* Settings Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label
                    className="block text-xs font-medium mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Dil
                  </label>
                  <div
                    className="p-3 rounded-lg border text-sm flex items-center justify-between cursor-pointer"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      borderColor: "var(--border-primary)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <span>Seçin</span>
                    <svg
                      className="w-4 h-4"
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
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-medium mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Rol
                  </label>
                  <div
                    className="p-3 rounded-lg border text-sm"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      borderColor: "var(--border-primary)",
                      color: "var(--text-primary)",
                    }}
                  >
                    Destek temsilcisi
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-medium mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Davranış
                  </label>
                  <div
                    className="p-3 rounded-lg border text-sm flex items-center space-x-2"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      borderColor: "var(--border-primary)",
                    }}
                  >
                    <div className="w-3 h-3 rounded-full bg-purple-500 flex items-center justify-center">
                      <svg
                        className="w-2 h-2 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                      </svg>
                    </div>
                    <span
                      className="text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Otopilot
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Icon */}
            <div className="absolute -top-3 -left-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: "var(--accent-primary)" }}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12l-7-7v4C7 10 4 15 4 20c2.5-3.5 6-5.1 10-5.1V18l7-6z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityControlSection;
