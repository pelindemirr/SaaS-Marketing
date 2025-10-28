"use client";

import React from "react";

const InboxFeaturesSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl lg:text-5xl font-bold text-center mb-16"
          style={{ color: "var(--text-primary)" }}
        >
          Bu inbox özelliklerinin kilidini açın
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 - Translations */}
          <div
            className="rounded-2xl p-8 border hover:shadow-xl transition-all duration-300"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-primary)",
            }}
          >
            <div
              className="rounded-xl p-6 mb-6"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              <div className="space-y-3">
                <div
                  className="p-3 rounded-lg text-sm"
                  style={{
                    backgroundColor: "var(--accent-primary)",
                    color: "white",
                  }}
                >
                  Hola!¿Me puede ayudar con mi pedido?
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-orange-400" />
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      İspanyolca • Son 2 dk • Bu konuşma
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h3
              className="text-lg font-bold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Çeviriler
            </h3>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Konuşmaları kolayca herhangi bir dilde çevirin, hızlı anlama için
            </p>
          </div>

          {/* Feature 2 - AI Summarization */}
          <div
            className="rounded-2xl p-8 border hover:shadow-xl transition-all duration-300"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-primary)",
            }}
          >
            <div
              className="rounded-xl p-6 mb-6"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-2xl">✨</span>
                  <div>
                    <div
                      className="text-xs font-medium mb-1"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      AI özeti oluşturuldu
                    </div>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Müşteri sipariş takibi hakkında soruyor, 12P1-8349...
                    </p>
                  </div>
                </div>
                <div
                  className="px-3 py-2 rounded-lg text-center text-xs font-medium"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    color: "var(--text-secondary)",
                  }}
                >
                  Özet oluştur
                </div>
              </div>
            </div>
            <h3
              className="text-lg font-bold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              AI Özetleme
            </h3>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Uzun konuşmalar kolayca özetlenebilir
            </p>
          </div>

          {/* Feature 3 - Multi-user & teams */}
          <div
            className="rounded-2xl p-8 border hover:shadow-xl transition-all duration-300"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-primary)",
            }}
          >
            <div
              className="rounded-xl p-6 mb-6"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-black/5 dark:bg-white/5">
                  <span
                    className="text-xs font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    ⭐ Atama yapılmayan
                  </span>
                  <button className="text-xs text-gray-400">×</button>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-black/5 dark:bg-white/5">
                  <span
                    className="text-xs font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    👥 Atama
                  </span>
                  <button className="text-xs text-gray-400">×</button>
                </div>
                <div className="space-y-2 pl-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-purple-400" />
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Alicia
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-blue-400" />
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Ethan
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-pink-400" />
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Jennifer
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <h3
              className="text-lg font-bold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Çoklu kullanıcı & ekipler
            </h3>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Konuşmaları işbirlikçi konuşmalar için ekibinizin belirli bir
              konumuna atayın
            </p>
          </div>

          {/* Feature 4 - Website widget */}
          <div
            className="rounded-2xl p-8 border hover:shadow-xl transition-all duration-300"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-primary)",
            }}
          >
            <div
              className="rounded-xl p-6 mb-6 flex items-center justify-center"
              style={{
                backgroundColor: "var(--bg-secondary)",
                minHeight: "180px",
              }}
            >
              <div className="relative">
                <div
                  className="rounded-lg p-4 shadow-lg max-w-xs"
                  style={{ backgroundColor: "var(--bg-card)" }}
                >
                  <p
                    className="text-xs mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Merhaba! Web sitemizdeki sorunlarla ilgili daha fazla bilgi
                    alabilir miyim?
                  </p>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                </div>
                <div
                  className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
                  style={{ backgroundColor: "var(--accent-primary)" }}
                >
                  <span className="text-white text-xl">💬</span>
                </div>
              </div>
            </div>
            <h3
              className="text-lg font-bold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Web sitesi widget'ı
            </h3>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Web sitesi widget'ımızla çok kanallı bir deneyim sunun
            </p>
          </div>

          {/* Feature 5 - Omnichannel inbox */}
          <div
            className="rounded-2xl p-8 border hover:shadow-xl transition-all duration-300"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-primary)",
            }}
          >
            <div
              className="rounded-xl p-6 mb-6"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              <div className="space-y-2">
                {[
                  { icon: "🎯", text: "Bilet Rezervasyonu", users: 2 },
                  { icon: "👕", text: "Bilet Rezervasyonu", users: 1 },
                  { icon: "📦", text: "Nakliye/Lojistik", users: 3 },
                  { icon: "⭐", text: "İlk Satır Desteği", users: 2 },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 rounded-lg"
                    style={{
                      backgroundColor:
                        index === 2
                          ? "var(--accent-primary)"
                          : "var(--bg-primary)",
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <span>{item.icon}</span>
                      <span
                        className="text-xs font-medium"
                        style={{
                          color: index === 2 ? "white" : "var(--text-primary)",
                        }}
                      >
                        {item.text}
                      </span>
                    </div>
                    <div className="flex -space-x-1">
                      {[...Array(item.users)].map((_, i) => (
                        <div
                          key={i}
                          className="w-5 h-5 rounded-full border-2 border-white"
                          style={{
                            backgroundColor: `hsl(${i * 100}, 60%, 60%)`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h3
              className="text-lg font-bold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              Çok kanallı inbox
            </h3>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Önemli olduğunda WhatsApp'ı müşteri hizmetleri gelen kutunuza
              ekleyin
            </p>
          </div>

          {/* Feature 6 - AI & automations */}
          <div
            className="rounded-2xl p-8 border hover:shadow-xl transition-all duration-300"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-primary)",
            }}
          >
            <div
              className="rounded-xl p-6 mb-6"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-xs">👤</span>
                  </div>
                  <div
                    className="flex-1 p-2 rounded-lg text-xs"
                    style={{
                      backgroundColor: "var(--bg-primary)",
                      color: "var(--text-primary)",
                    }}
                  >
                    Ürün rengini değiştirebilir miyim?
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <div
                    className="p-2 rounded-lg text-xs max-w-[200px]"
                    style={{
                      backgroundColor: "var(--accent-primary)",
                      color: "white",
                    }}
                  >
                    Evet elbette! 30 gün içinde ücretsiz iade edilir
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                    <span className="text-white text-xs">🤖</span>
                  </div>
                </div>
                <div className="flex space-x-1 justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                </div>
              </div>
            </div>
            <h3
              className="text-lg font-bold mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              AI & otomasyonlar
            </h3>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Tekrarlayan konuşmaları ele almak için AI'ı WhatsApp'a kullanın
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InboxFeaturesSection;
