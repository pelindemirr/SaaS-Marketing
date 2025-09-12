"use client";

import React, { useState } from "react";
import { plans } from "./plans";

export type Plan = {
  name: string;
  price: string;
  period: string;
  features: string[];
  duration: string;
  type: string;
  color: string;
  popular?: boolean;
};

// Özellik kategorileri ve durumları
const featureCategories = [
  {
    category: "İletişim Kanalları /mesaj kanalları ",
    features: [
      {
        name: "Facebook, Instagram, Viber, Telegram Entegrasyonları",
        temel: "available",
        profesyonel: "available",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "WhatsApp Entegrasyonu (Ek olarak ücretlendirilemektedir)",
        temel: "unavailable",
        profesyonel: "unavailable",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "Apple Business Chat",
        temel: "unavailable",
        profesyonel: "unavailable",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "Facebook, Instagram ve Telegram'da Sesli Mesajlar",
        temel: "unavailable",
        profesyonel: "unavailable",
        premium: "available",
        kurumsal: "available",
      },
    ],
  },
  {
    category: "Yönetim ve Analiz /sohbet penceresi ",
    features: [
      {
        name: "Sohbet öncesi butonlar",
        temel: "unavailable",
        profesyonel: "available",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "Dosya gönderme-alma",
        temel: "unavailable",
        profesyonel: "available",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "Mobil cihazlara uygun sohbet penceresi",
        temel: "available",
        profesyonel: "available",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "Gönderim sonrası yanıt düzenleme",
        temel: "unavailable",
        profesyonel: "available",
        premium: "available",
        kurumsal: "available",
      },
    ],
  },
  {
    category: "Gelişmiş Özellikler(mobil-tel)",
    features: [
      {
        name: "Mobil Uygulama SDK",
        temel: "unavailable",
        profesyonel: "unavailable",
        premium: "unavailable",
        kurumsal: "available",
      },
      {
        name: "Telefon+ Modülü",
        temel: "extra",
        profesyonel: "extra",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "Görüntülü Görüşme Modülü",
        temel: "extra",
        profesyonel: "extra",
        premium: "extra",
        kurumsal: "available",
      },
    ],
  },

  {
    category: "Temel İletişim Özellikleri /ziyaretçi izleme ",
    features: [
      {
        name: "Akıllı yönlendirme",
        temel: "unavailable",
        profesyonel: "unavailable",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "Canlı ziyaretçi takibi ve sitedeki ziyaretçiye manuel mesaj gönderme",
        temel: "unavailable",
        profesyonel: "available",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "E-posta entegrasyonu",
        temel: "unavailable",
        profesyonel: "unavailable",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: " kampanya tetikleyici",
        temel: "unavailable",
        profesyonel: "unavailable",
        premium: "available",
        kurumsal: "available",
      },
    ],
  },
  {
    category: "agent mesaj",
    features: [
      {
        name: "Taslak cevaplar",
        temel: "unavailable",
        profesyonel: "available",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "Çoklu temsilcili sohbetler",
        temel: "unavailable",
        profesyonel: "available",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "Temsilci atama",
        temel: "unavailable",
        profesyonel: "unavailable",
        premium: "available",
        kurumsal: "available",
      },
    ],
  },
  {
    category: "Chatbot & Yapay zeka",
    features: [
      {
        name: "Soru-cevap botu",
        temel: "unavailable",
        profesyonel: "available",
        premium: "available",
        kurumsal: "available",
      },

      {
        name: "Yazım denetimi",
        temel: "unavailable",
        profesyonel: "available",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: " Özet çıkarma",
        temel: "unavailable",
        profesyonel: "unavailable",
        premium: "available",
        kurumsal: "available",
      },
    ],
  },

  {
    category: "CPM ve Sipariş",
    features: [
      {
        name: "Müşteri profili",
        temel: "unavailable",
        profesyonel: "unavailable",
        premium: "available",
        kurumsal: "available",
      },

      {
        name: "Sipariş senkronizasyonu",
        temel: "unavailable",
        profesyonel: "unavailable",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "Fatura entegrasyonu",
        temel: "unavailable",
        profesyonel: "available",
        premium: "available",
        kurumsal: "available",
      },
    ],
  },
  {
    category: "geliştirici apı ",
    features: [
      {
        name: "Excel'e veri dökümü alma",
        temel: "unavailable",
        profesyonel: "available",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "Raporlama API",
        temel: "unavailable",
        profesyonel: "unavailable",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "webhook",
        temel: "unavailable",
        profesyonel: "unavailable",
        premium: "available",
        kurumsal: "available",
      },
    ],
  },

  {
    category: "operasyon ekip yönetimi ",
    features: [
      {
        name: "Yetkilendirme",
        temel: "unavailable",
        profesyonel: "unavailable",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "Onay Akışları",
        temel: "unavailable",
        profesyonel: "unavailable",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "Vardiya Planlama",
        temel: "unavailable",
        profesyonel: "available",
        premium: "available",
        kurumsal: "available",
      },
    ],
  },

  {
    category: "güvenlik uyarı",
    features: [
      {
        name: "IP Kısıtlama",
        temel: "unavailable",
        profesyonel: "available",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "iki faktörlü doğrulama",
        temel: "available",
        profesyonel: "available",
        premium: "available",
        kurumsal: "available",
      },
      {
        name: "kvkk uyumu",
        temel: "unavailable",
        profesyonel: "unavailable",
        premium: "available",
        kurumsal: "available",
      },
    ],
  },
];

const PricingPanel: React.FC = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#1a1d21] text-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-700 bg-[#1a1d21]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#275db5] rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">CC</span>
              </div>
              <h1 className="text-2xl font-bold text-[#275db5]">CCPilot</h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-300 hover:text-[#275db5] transition-colors"
              >
                Anasayfa
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#275db5] transition-colors"
              >
                Özellikler
              </a>
              <a href="#" className="text-[#275db5] font-medium">
                Fiyatlandırma
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#275db5] transition-colors"
              >
                Destek
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#275db5] transition-colors"
              >
                İletişim
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white transition-colors">
                Giriş Yap
              </button>
              <button className="bg-[#275db5] text-white px-6 py-2 rounded-lg hover:bg-[#1e4a8c] transition-colors">
                Ücretsiz Dene
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Müşteri İletişiminde</span>
            <br />
            <span className="text-[#275db5]">Yeni Dönem</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            CCPilot ile tüm iletişim kanallarınızı tek platformda yönetin.
            Müşteri memnuniyetinizi artırın, satışlarınızı büyütün.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#275db5] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1e4a8c] transition-colors">
              14 Gün Ücretsiz Dene
            </button>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:border-[#275db5] hover:text-[#275db5] transition-colors">
              Demo İzle
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Size Uygun Planı Seçin
            </h2>
            <p className="text-xl text-gray-400">
              14 gün ücretsiz deneme ile hemen başlayın
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-[#22262b] rounded-xl p-6 flex flex-col justify-between border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative ${
                  plan.popular
                    ? "border-[#275db5] shadow-lg shadow-[#275db5]/20"
                    : "border-gray-700 hover:border-[#275db5]"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#275db5] text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popüler
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-[#275db5] mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.price !== "₺0" && (
                      <span className="text-gray-400 text-sm">/ay</span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">{plan.period}</p>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-3 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-200">
                      <svg
                        className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-4">{plan.duration}</p>
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? "bg-[#275db5] text-white hover:bg-[#1e4a8c]"
                        : "bg-white text-black hover:bg-gray-200"
                    }`}
                  >
                    {plan.price === "₺0" ? "Ücretsiz Başla" : "Satın Al"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="py-16 px-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="inline-flex items-center text-[#275db5] text-xl font-semibold hover:text-[#1e4a8c] transition-colors"
            >
              {showAllFeatures
                ? "Özellik Karşılaştırmasını Gizle"
                : "Tüm Özellikleri Karşılaştır"}
              <svg
                className={`w-6 h-6 ml-2 transition-transform ${
                  showAllFeatures ? "rotate-180" : ""
                }`}
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
            </button>
          </div>

          {showAllFeatures && (
            <div className="bg-[#22262b] rounded-xl border border-gray-700 overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-5 bg-[#1a1d21] border-b border-gray-700">
                <div className="p-4 font-semibold text-white">Özellikler</div>
                <div className="p-4 text-center font-semibold text-[#2196F3]">
                  Temel
                </div>
                <div className="p-4 text-center font-semibold text-[#2196F3]">
                  Profesyonel
                </div>
                <div className="p-4 text-center font-semibold text-[#2196F3]">
                  Premium
                </div>
                <div className="p-4 text-center font-semibold text-[#2196F3]">
                  Kurumsal
                </div>
              </div>

              {/* Feature Categories */}
              {featureCategories.map((category, categoryIdx) => (
                <div key={categoryIdx}>
                  {/* Category Header */}
                  <div className="bg-[#2196F3]/10 border-b border-gray-700 px-4 py-3">
                    <h4 className="font-semibold text-[#2196F3] text-lg">
                      {category.category}
                    </h4>
                  </div>

                  {/* Features in this category */}
                  {category.features.map((feature, featureIdx) => (
                    <div
                      key={featureIdx}
                      className="grid grid-cols-5 border-b border-gray-700 hover:bg-[#1a1d21]/30 transition-colors"
                    >
                      <div className="p-4 text-gray-200">{feature.name}</div>

                      {/* Feature status for each plan */}
                      {["temel", "profesyonel", "premium", "kurumsal"].map(
                        (plan) => (
                          <div key={plan} className="p-4 text-center">
                            {feature[plan as keyof typeof feature] ===
                              "available" && (
                              <div className="flex justify-center">
                                <svg
                                  className="w-5 h-5 text-green-500"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            )}

                            {feature[plan as keyof typeof feature] ===
                              "unavailable" && (
                              <div className="flex justify-center">
                                <div className="w-5 h-0.5 bg-gray-400 my-2"></div>
                              </div>
                            )}

                            {feature[plan as keyof typeof feature] ===
                              "extra" && (
                              <div className="flex justify-center">
                                {/* Opsiyonel: Burada özel fiyat bilgisi eklenebilir */}
                                <span className="text-xs text-[#f2f2f2]">
                                  Senelik alımda aylık temsilci
                                  <br />
                                  başına ₺175
                                </span>
                                {/* Veya basit bir bilgi simgesi */}
                                {/* <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg> */}
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  ))}
                </div>
              ))}

              {/* Legend */}
            </div>
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 bg-[#22262b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hemen Başlamaya Hazır mısınız?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            14 gün ücretsiz deneme ile CCPilot'u keşfedin. Kredi kartı
            gerektirmez.
          </p>
          <button className="bg-[#275db5] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1e4a8c] transition-colors">
            Ücretsiz Denemeyi Başlat
          </button>
        </div>
      </section>
    </div>
  );
};

export default PricingPanel;
