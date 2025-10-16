"use client";

import React from "react";

const CapabilitiesSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="rounded-3xl p-12"
          style={{ backgroundColor: "var(--bg-card)" }}
        >
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              AI Agent'ınız Bugün Neler Yapabilir:
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Gelişmiş yapay zeka teknolojileri ile donatılmış asistanınız
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💬",
                title: "Anlık Konuşma",
                description:
                  "Müşterilerle gerçek zamanlı doğal dil ile konuşur ve anında yanıt verir",
              },
              {
                icon: "📋",
                title: "Görev Yönetimi",
                description:
                  "Randevu alma, sipariş takibi gibi rutin görevleri otomatik halleder",
              },
              {
                icon: "💡",
                title: "Akıllı Öneriler",
                description:
                  "Müşteri geçmişine göre kişiselleştirilmiş ürün ve hizmet önerileri sunar",
              },
              {
                icon: "📊",
                title: "Veri Analizi",
                description:
                  "Konuşmaları analiz eder ve işletmeniz için değerli içgörüler sağlar",
              },
              {
                icon: "🌐",
                title: "Çoklu Platform",
                description:
                  "Web, mobil, sosyal medya kanallarında aynı kalitede hizmet verir",
              },
              {
                icon: "🔄",
                title: "Sürekli Öğrenme",
                description:
                  "Her etkileşimden öğrenir ve zamanla daha da akıllı hale gelir",
              },
              {
                icon: "⚡",
                title: "Hızlı Entegrasyon",
                description:
                  "Mevcut sistemlerinizle kolayca entegre olur ve anında çalışmaya başlar",
              },
              {
                icon: "🎯",
                title: "Hedef Odaklı",
                description:
                  "İş hedeflerinize uygun şekilde optimize edilmiş yanıtlar üretir",
              },
            ].map((capability, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl transition-all duration-300"
                style={{ backgroundColor: "var(--bg-secondary)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.backgroundColor = "var(--bg-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.backgroundColor = "var(--bg-secondary)";
                }}
              >
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {capability.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
