"use client";
import { Plan } from "./page";

export const plans: Plan[] = [
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
    color: "#275db5",
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
    color: "#275db5",
    popular: true,
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
    color: "#21c8f6",
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
    color: "#21c8f6",
  },
];
