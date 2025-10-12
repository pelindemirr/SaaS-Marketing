// Pricing feature categories and their availability status
export interface Feature {
  name: string;
  temel: "available" | "unavailable" | "extra";
  profesyonel: "available" | "unavailable" | "extra";
  premium: "available" | "unavailable" | "extra";
  kurumsal: "available" | "unavailable" | "extra";
}

export interface FeatureCategory {
  category: string;
  features: Feature[];
}

// Özellik kategorileri ve durumları
export const featureCategories: FeatureCategory[] = [
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
