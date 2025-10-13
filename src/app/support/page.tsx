"use client";

import React from "react";

const SolutionsPage: React.FC = () => {
  return (
    <section className="w-full bg-[var(--bg-primary)] py-20 px-6 transition-colors duration-300">
      {/* Üst kısım */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Sol taraf */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-semibold text-[var(--text-secondary)] mb-3 tracking-wide uppercase">
            Daha İyi Müşteri Deneyimi ve Bağlılığı
          </p>
          <h1 className="text-4xl font-extrabold text-[var(--text-primary)] leading-snug">
            Daha güçlü müşteri ilişkileri <br /> için daha fazla zaman ayırın
          </h1>
          <p className="mt-4 text-[var(--text-secondary)] max-w-md">
            Etkileşimli ve zamanında yapılan görüşmelerle müşterilerinizin
            işletmenize sadık kalmasını ve en büyük marka elçileriniz olmasını
            sağlayın. Her kanalda, her an.
          </p>
          <button className="mt-6 btn-primary px-6 py-3 rounded-lg font-semibold">
            Keşfet
          </button>
        </div>

        {/* Sağ taraf */}
        <div className="flex-1">
          <div className="w-full h-72 bg-[var(--bg-card)] rounded-2xl flex items-center justify-center text-[var(--text-secondary)] border border-[var(--border-primary)] transition-colors duration-300">
            <span>İllüstrasyon / Görsel</span>
          </div>
          <p className="text-[var(--text-secondary)] text-sm mt-4 text-center md:text-left">
            Dünya çapında 3.000'den fazla müşterinin güvendiği!{" "}
            <a
              href="#"
              className="text-[var(--accent-primary)] hover:text-[var(--accent-hover)] transition"
            >
              Diğerlerinden öğrenin
            </a>
          </p>
        </div>
      </div>

      {/* Alt kısım (3 özellik sütunu) */}
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-10 text-center md:text-left">
        {[
          {
            icon: "👥",
            title: "Müşteri Bağlantıları",
            text: "WhatsApp, e-posta, canlı sohbet, SMS, sosyal medya üzerinden müşterilerinizle değerli anlar yaratın - hepsi Trengo'dan.",
            link: "Demo talep et →",
          },
          {
            icon: "🧭",
            title: "Sezgisel Müşteri Yolculukları",
            text: "Karmaşık soruları yanıtlamaktan yeniden satın almalarına veya yenilemelerine yardımcı olmaya kadar yolun her adımında yanlarında olduğunuzu kanıtlayın.",
            link: "Platformu keşfet →",
          },
          {
            icon: "📈",
            title: "Etkileşim Analizleri",
            text: "İş teklifinizi iyileştirmek, müşteri geri bildirimlerine öncelik vermek ve genel stratejinizi ayarlamak için görüşme verilerini kullanın.",
            link: "Fiyatları incele →",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="transition-colors duration-300 hover:opacity-90"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
              {item.title}
            </h3>
            <p className="text-[var(--text-secondary)] mb-3">{item.text}</p>
            <a
              href="#"
              className="font-semibold text-[var(--accent-primary)] hover:text-[var(--accent-hover)] transition"
            >
              {item.link}
            </a>
          </div>
        ))}
      </div>

      {/* Koyu mavi alt kısım */}
      <div className="mt-24 bg-[var(--bg-card)] py-20 px-6 rounded-[2rem] max-w-6xl mx-auto shadow-xl border border-[var(--border-primary)]">
        <h2 className="text-3xl font-bold text-center text-[var(--text-primary)] mb-12">
          Mükemmel müşteri etkileşimi <br /> bir konuşmayla başlar
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Kalite veya hızdan ödün vermeyin",
              desc: "Gelen sıkça sorulan soruların %50'ye kadarını otomatikleştirin, böylece ekibiniz müşterilerinizin daha karmaşık sorularına ve ihtiyaçlarına odaklanabilir.",
              button: "Buradan başlayın",
            },
            {
              title: "Müşteri memnuniyetini yüksek, ekip moralini daha yüksek tutun",
              desc: "Görüşme sayısı, yanıt süresi ve müşteri memnuniyeti gibi temel performans göstergelerini sektör ölçütlerine göre takip edin.",
              button: "Şimdi başla",
            },
            {
              title: "Gelir getiren ilişkiler kurun",
              desc: "Satın alma geçmişlerine dayanarak müşterilerinize yaklaşan promosyonlar ve teklifler hakkında proaktif olarak bilgi vermek için kişiselleştirilmiş mesajlar kullanın.",
              button: "Nasıl olduğunu keşfedin",
            },
            {
              title: "Yapay zeka ve otomasyon ile müşteri deneyiminizi ölçeklendirin",
              desc: "Büyümenizin temel taşı olarak müşteri etkileşimini benimseyin; işinizi ilerletmek için görüşmeleri, ekibinizin müşteri memnuniyetine odaklanmasını sağlamak için otomasyonu kullanın.",
              button: "Demo talep et",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[var(--bg-primary)] p-8 rounded-2xl border border-[var(--border-primary)] shadow-md transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] mb-6">{item.desc}</p>
              <button className="btn-primary px-5 py-2 rounded-lg font-semibold">
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* "Mutlu Müşteriler" Bölümü */}
      <div className="max-w-6xl mx-auto mt-24">
        <h2 className="text-4xl font-extrabold text-[var(--text-primary)] text-center mb-12">
          Mutlu müşteriler yaratan <br /> özellikler
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "💬",
              title: "Canlı Sohbet",
              desc: "Web sitenize kod gerektirmeyen, 7/24 otomatik veya insan destekli bir canlı sohbet ekleyin.",
            },
            {
              icon: "👤",
              title: "Kişi Profilleri",
              desc: "Kişiselleştirilmiş görüşmeleri erişilebilir kılmak için kritik müşteri profili verilerini doğrudan Trengo'da tutun.",
            },
            {
              icon: "🔀",
              title: "Otomatik Yönlendirme",
              desc: "Otomatik iş akışları oluşturarak gelen potansiyel müşterileri otomatik olarak doğru kişiye yönlendirin.",
            },
            {
              icon: "📊",
              title: "Veri Zekası",
              desc: "Ekip performansını ölçün ve en yoğun zamanlar, en aktif kanallar gibi önemli içgörüler edinin.",
            },
            {
              icon: "📥",
              title: "Çok Kanallı Gelen Kutusu",
              desc: "E-posta, SMS, WhatsApp, sosyal kanallar ve daha fazlasını bağlayın - böylece tüm görüşmeler merkezileştirilir.",
            },
            {
              icon: "📞",
              title: "Sesli Aramalar",
              desc: "Müşterilerinizle ve potansiyel müşterilerinizle sesli aramaları doğrudan Trengo üzerinden yapın ve takip edin.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-primary)] shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                {feature.title}
              </h3>
              <p className="text-[var(--text-secondary)]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsPage;