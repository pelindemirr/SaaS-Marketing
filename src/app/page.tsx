import React from "react";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Müşteri İletişiminde</span>
            <br />
            <span className="text-accent">Yeni Dönem</span>
          </h1>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            CCPilot ile tüm iletişim kanallarınızı tek platformda yönetin.
            Müşteri memnuniyetinizi artırın, satışlarınızı büyütün.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-4 rounded-lg text-lg font-semibold">
              14 Gün Ücretsiz Dene
            </button>
            <button className="border border-primary px-8 py-4 rounded-lg text-lg font-semibold transition-colors text-primary hover:bg-secondary">
              Demo İzle
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Güçlü Özellikler
            </h2>
            <p className="text-xl text-secondary">
              İşinizi kolaylaştıran gelişmiş özellikler
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Çoklu Kanal Desteği",
                description:
                  "WhatsApp, Telegram, Facebook ve daha fazla platformda tek yerden yönetim",
                icon: "💬",
              },
              {
                title: "Akıllı Chatbot",
                description:
                  "7/24 müşteri desteği sağlayan yapay zeka destekli chatbot",
                icon: "🤖",
              },
              {
                title: "Gerçek Zamanlı Analiz",
                description:
                  "Detaylı raporlama ve analiz araçlarıyla performansınızı takip edin",
                icon: "📊",
              },
              {
                title: "Kolay Entegrasyon",
                description: "Mevcut sistemlerinizle sorunsuz entegrasyon",
                icon: "🔗",
              },
              {
                title: "Mobil Uygulamalar",
                description: "iOS ve Android uygulamalarıyla her yerden erişim",
                icon: "📱",
              },
              {
                title: "Güvenlik",
                description: "KVKK uyumlu ve bank-level güvenlik standartları",
                icon: "🔒",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-primary hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
