"use client";

import React from "react";

const ProductsPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-primary">CCPilot</span>
            <br />
            <span className="text-accent">Ürünlerimiz</span>
          </h1>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Müşteri iletişimini yönetmek için ihtiyacınız olan tüm araçlar.
            Canlı sohbet, chatbot, analitik ve daha fazlası.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Canlı Sohbet */}
            <div className="product-card rounded-xl p-8 border transition-colors">
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Canlı Sohbet
                </h3>
                <p className="text-secondary">
                  Web sitenizde anlık müşteri desteği sağlayın.
                  Ziyaretçilerinizi müşteriye dönüştürün.
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-secondary">
                  <svg
                    className="w-4 h-4 mr-2 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Gerçek zamanlı mesajlaşma
                </li>
                <li className="flex items-center text-secondary">
                  <svg
                    className="w-4 h-4 mr-2 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Özelleştirilebilir widget
                </li>
                <li className="flex items-center text-secondary">
                  <svg
                    className="w-4 h-4 mr-2 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Mobil uyumlu
                </li>
              </ul>
            </div>

            {/* Chatbot */}
            <div className="product-card rounded-xl p-8 border transition-colors">
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H7.414l-2.707 2.707A1 1 0 013 13V4zm3 2a1 1 0 000 2h8a1 1 0 100-2H6zm0 3a1 1 0 000 2h3a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  AI Chatbot
                </h3>
                <p className="text-secondary">
                  Yapay zeka destekli otomatik yanıtlar ile 7/24 müşteri
                  hizmeti.
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-secondary">
                  <svg
                    className="w-4 h-4 mr-2 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Akıllı soru-cevap
                </li>
                <li className="flex items-center text-secondary">
                  <svg
                    className="w-4 h-4 mr-2 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Öğrenme kabiliyeti
                </li>
                <li className="flex items-center text-secondary">
                  <svg
                    className="w-4 h-4 mr-2 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Türkçe dil desteği
                </li>
              </ul>
            </div>

            {/* Multi-Channel */}
            <div className="product-card rounded-xl p-8 border transition-colors">
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Çoklu Kanal
                </h3>
                <p className="text-secondary">
                  WhatsApp, Facebook, Instagram, Telegram ve daha fazlası tek
                  platformda.
                </p>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-secondary">
                  <svg
                    className="w-4 h-4 mr-2 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  WhatsApp Business API
                </li>
                <li className="flex items-center text-secondary">
                  <svg
                    className="w-4 h-4 mr-2 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Sosyal medya entegrasyonu
                </li>
                <li className="flex items-center text-secondary">
                  <svg
                    className="w-4 h-4 mr-2 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Merkezi mesaj yönetimi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
