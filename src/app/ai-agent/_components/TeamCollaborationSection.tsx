"use client";

import React from "react";

const TeamCollaborationSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="mb-8">
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
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h2v2h2v2H4zm0-4V6h6v2H6v6H4zm12-2V6h2v2h2v2h-2v2h-2zm4-6h-2V4c0-1.11-.89-2-2-2s-2 .89-2 2v2h-2v2h6V6z" />
                  </svg>
                </div>
                <h2
                  className="text-4xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Ekiplerin istediği yeni
                  <br />
                  <span style={{ color: "var(--accent-primary)" }}>
                    takım arkadaşı:
                  </span>
                </h2>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Aynı soruyu tekrar tekrar sormayı bırakın",
                "Yanıtlarının her zaman profesyonel ve kişisel olduğundan emin olun",
                "Müşterileri destekleyin veya satış fırsatlarını yakalayın, hatta meşgul olduğunuzda bile",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--accent-primary)" }}
                  ></div>
                  <p
                    className="text-lg"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

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

          {/* Right Side - Team Chat Interface */}
          <div className="relative">
            <div
              className="rounded-2xl p-6 shadow-2xl max-w-md"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              {/* Chat Messages */}
              <div className="space-y-4">
                {/* Customer Question */}
                <div className="flex justify-end">
                  <div
                    className="max-w-xs px-4 py-3 rounded-2xl rounded-br-md"
                    style={{
                      backgroundColor: "var(--accent-primary)",
                      color: "white",
                    }}
                  >
                    <p className="text-sm">
                      Merhaba! Ne zamana kadar rezervasyon yapabilirim?
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center">
                          <span className="text-white text-xs">👤</span>
                        </div>
                        <span className="text-xs opacity-80">
                          Facebook üzerinden
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Path Support Notification */}
                <div className="flex justify-center">
                  <div
                    className="px-3 py-1 rounded-full text-xs flex items-center space-x-2"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <div className="w-4 h-4 rounded bg-orange-500 flex items-center justify-center">
                      <svg
                        className="w-2 h-2 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.95 10 3.31 0 6.23-1.61 8.06-4.09l-2.6-1.53C16.58 17.37 14.4 19 12 19z" />
                      </svg>
                    </div>
                    <span>Yol Destek</span>
                  </div>
                </div>

                {/* AI HelpMate Response */}
                <div
                  className="px-4 py-3 rounded-2xl rounded-bl-md"
                  style={{
                    backgroundColor: "var(--accent-primary)",
                    color: "white",
                  }}
                >
                  <div className="flex items-start space-x-2 mb-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium opacity-90">
                      AI Yardımcı
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed">
                    Pazartesi-Cuma arası 09:00-15:00 saatleri arasında bu link
                    üzerinden rezervasyon yapabilirsiniz.
                  </p>
                </div>

                {/* Auto Resolved Status */}
                <div className="flex justify-center">
                  <div
                    className="px-3 py-1 rounded-full text-xs flex items-center space-x-2"
                    style={{
                      backgroundColor: "var(--status-success)",
                      color: "white",
                    }}
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    <span>Otomatik çözüldü</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCollaborationSection;
