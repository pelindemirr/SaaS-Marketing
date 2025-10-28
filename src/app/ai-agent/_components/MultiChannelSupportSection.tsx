"use client";

import React from "react";

const MultiChannelSupportSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-center">
          {/* Right Side - Multi-Channel Interface */}
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="space-y-4 sm:space-y-5">
              {/* Facebook Message Card */}
              <div
                className="p-4 sm:p-6 rounded-xl shadow-lg border transition-all duration-200 hover:shadow-xl"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">👤</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-medium mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Merhaba, ürününüz hakkında bir sorum var...
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded bg-blue-600 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">f</span>
                      </div>
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Facebook üzerinden
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Message Card */}
              <div
                className="p-4 rounded-xl shadow-lg border"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex -space-x-1 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs">👤</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs">🤖</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-medium mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Merhaba, kargo durumunu öğrenmek istiyorum...
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded bg-purple-600 flex items-center justify-center">
                        <span className="text-white text-xs">✉</span>
                      </div>
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        E-posta üzerinden
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Message Card with Counter */}
              <div
                className="p-4 sm:p-6 rounded-xl shadow-lg border relative transition-all duration-200 hover:shadow-xl"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-medium mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Bu kampanyayla ilgileniyorum, detay alabilir miyim?
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded bg-green-600 flex items-center justify-center">
                        <svg
                          className="w-2 h-2 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z" />
                        </svg>
                      </div>
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        WhatsApp üzerinden
                      </span>
                    </div>
                  </div>

                  {/* Message Counter */}
                  <div className="absolute -top-2 -right-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: "var(--accent-primary)" }}
                    >
                      +12
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Left Side - Content */}
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
                  <path d="M20 4H4c-1.11 0-2 .89-2 2v18l4-4h14c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2z" />
                </svg>
              </div>
              <h2
                className="text-4xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Her kanalda anında
                <br />
                <span style={{ color: "var(--accent-primary)" }}>
                  müşteri desteği
                </span>
              </h2>
            </div>

            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Organize coverage'ı bırakın ve destek saatlerini düzene sokun.
              Müşterileriniz her kanalda hızlı, kişiselleştirilmiş yanıtlar
              alacak - 20+ dilde, istediği zaman - hatta siz offline olsanız
              bile.
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
              Başlayın
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiChannelSupportSection;
