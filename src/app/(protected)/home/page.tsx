import React from "react";

type Plan = {
  name: string;
  price: string;
  period: string;
  features: string[];
  duration: string;
  type: string;
  color: string;
};

const plans: Plan[] = [
  {
    name: "Temel",
    price: "₺0",
    period: "Yıllık alımda temsilci başına aylık ücret",
    features: [
      "Sitenizde canlı destek sunma",
      "Telegram, Facebook, Viber, Email kanallarını bağlama",
      "Geri-arama özelliği",
      "Çevirimçi iletişim formu",
      "Masaüstü, mobil ve tarayıcı için temsilci uygulamaları",
    ],
    duration: "14 gün ücretsiz deneme",
    type: "BASE",
    color: "#2196F3",
  },
  {
    name: "Profesyonel",
    price: "₺770",
    period: "Yıllık alımda temsilci başına aylık ücret",
    features: [
      "Akıllı tetikleyicilere ve sohbet botlarına erişim",
      "Gerçek zamanlı ziyaretçi takibi ve ziyaretçilerle manuel sohbet bağlama",
      "Taslak cevaplar ve akıllı yazım önerileri",
      "Spam koruması",
      "JivoChat CRM",
    ],
    duration: "14 gün ücretsiz deneme",
    type: "PRO",
    color: "#2196F3",
  },
  {
    name: "Premium",
    price: "₺1.120",
    period: "Yıllık alımda temsilci başına aylık ücret",
    features: [
      "Hesabınıza atanacak yönetici için en iyi verimi almak",
      "Telefon+ Modülü",
      "Telegram, Instagram ve Facebook kanallarında sesli mesajlar",
      "Chatbotlar ile entegrasyon",
      "Sohbet kurtarma",
    ],
    duration: "14 gün ücretsiz deneme",
    type: "PREM",
    color: "#2196F3",
  },
  {
    name: "Kurumsal",
    price: "₺1.540",
    period: "Yıllık alımda temsilci başına aylık ücret",
    features: [
      "Kurumsal firmalar için en gelişmiş özelliklerle 360 derece iletişim altyapısı",
      "Mobil SDK Entegrasyonu",
      "Sohbet Yönlendirme",
      "Video Görüşme Modülü",
      "Chat API",
    ],
    duration: "14 gün ücretsiz deneme",
    type: "VIP",
    color: "#2196F3",
  },
];

const PricingPanel: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#1a1d21] text-white p-10">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#275db5] mb-2">CCPilot</h1>
        <p className="text-lg text-gray-400">
          Abonelik paketleri ve müşteri yönetimi
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-[#22262b] rounded-xl p-6 flex flex-col justify-between border border-gray-700 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            {/* Plan Başlığı */}
            <div className="mb-4">
              <h2
                className="text-2xl font-semibold mb-2"
                style={{ color: plan.color }}
              >
                {plan.name}
              </h2>
              <p className="text-xl font-bold mb-1">{plan.price}</p>
              <p className="text-gray-400 text-sm">{plan.period}</p>
            </div>

            {/* Özellikler */}
            <ul className="mb-4 text-gray-200 space-y-1 text-left">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-green-400">✔</span> {feature}
                </li>
              ))}
            </ul>

            {/* Deneme ve Buton */}
            <div className="mt-auto text-center">
              <p className="text-gray-400 text-sm mb-3">{plan.duration}</p>
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                Satın Al
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPanel;
