"use client";

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Statistics */}
          <div>
            <div className="mb-8">
              <h2
                className="text-5xl font-bold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                <span style={{ color: "var(--accent-primary)" }}>%85</span>{" "}
                müşteri
              </h2>
              <h2
                className="text-5xl font-bold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                konuşmaları
              </h2>
              <h2 className="text-5xl font-bold mb-6">
                <span style={{ color: "var(--accent-primary)" }}>anında</span>
                <br />
                <span style={{ color: "var(--text-primary)" }}>
                  AI ile çözülüyor.
                </span>
              </h2>
            </div>

            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              AI Agent doğru zamanda doğru müşteriye ulaşır. Akıllı
              algoritmaları sayesinde müşteri ihtiyaçlarını anlayarak en uygun
              çözümleri sunar ve mükemmel deneyim yaratır.
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
              Demo İzle
            </button>
          </div>

          {/* Right Side - Chat Interface Mockup */}
          <div className="relative">
            <div
              className="rounded-2xl p-8 shadow-2xl"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              {/* Chat Header */}
              <div
                className="flex items-center mb-6 pb-4 border-b"
                style={{ borderColor: "var(--border-primary)" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span
                    className="font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    CCPilot AI Agent
                  </span>
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span
                    className="text-sm"
                    style={{ color: "var(--status-success)" }}
                  >
                    Aktif
                  </span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mb-6">
                {/* User Message */}
                <div className="flex justify-end">
                  <div
                    className="max-w-xs px-4 py-3 rounded-2xl"
                    style={{
                      backgroundColor: "var(--accent-primary)",
                      color: "white",
                    }}
                  >
                    <p className="text-sm">
                      Merhaba! Sipariş durumumu öğrenebilir miyim?
                    </p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex">
                  <div
                    className="max-w-xs px-4 py-3 rounded-2xl"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <p className="text-sm">
                      Tabii ki! Sipariş numaranızı paylaşır mısınız? Hemen
                      kontrol edeyim.
                    </p>
                    <div className="mt-2 flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 rounded-full bg-current opacity-60 animate-pulse"></div>
                        <div
                          className="w-1 h-1 rounded-full bg-current opacity-60 animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-1 h-1 rounded-full bg-current opacity-60 animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                      <span className="text-xs opacity-60">AI yazıyor...</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div
                className="flex items-center space-x-3 p-3 rounded-xl border"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <input
                  type="text"
                  placeholder="Mesajınızı yazın..."
                  className="flex-1 bg-transparent outline-none text-sm"
                  style={{ color: "var(--text-primary)" }}
                  disabled
                />
                <button
                  className="p-2 rounded-lg transition-colors"
                  style={{ backgroundColor: "var(--accent-primary)" }}
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 z-10">
              <div
                className="px-4 py-2 rounded-full shadow-lg flex items-center space-x-2"
                style={{ backgroundColor: "var(--accent-primary)" }}
              >
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                <span className="text-white text-sm font-medium">Canlı</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 z-10">
              <div
                className="px-4 py-2 rounded-full shadow-lg"
                style={{ backgroundColor: "var(--status-success)" }}
              >
                <span className="text-white text-sm font-medium">
                  %99.9 Uptime
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
