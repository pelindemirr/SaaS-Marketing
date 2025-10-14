"use client";

import React from "react";
import Image from "next/image";
import headerImage from '../../assets/lead-customer/header.png';
import togetherImage from '../../assets/lead-customer/together.png';
import trendImage from '../../assets/lead-customer/trend.png';
import scabilityImage from '../../assets/lead-customer/scability.png';
import meetImage from '../../assets/lead-customer/meet.png';

const SolutionsPage: React.FC = () => {
  return (
    <section className="w-full bg-[var(--bg-primary)] py-20 px-6 transition-colors duration-300">
      {/* Üst kısım */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Sol taraf (İçerik güncellendi) */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-semibold text-[var(--text-secondary)] mb-3 tracking-wide uppercase">
            Müşteri Adayı Oluşturma
          </p>
          <h1 className="text-4xl font-extrabold text-[var(--text-primary)] leading-snug">
            Müşteri adaylarını daha hızlı <br /> dönüştürün ve etkileşim kurun
          </h1>
          <p className="mt-4 text-[var(--text-secondary)] max-w-md">
            Bir daha asla fırsatları kaçırmayın. Gelen ve giden tüm kanallarınızı bağlayarak tüm görüşmeleri tek bir yerden yönetin, böylece potansiyel müşterileriniz hiç beklemesin.
          </p>
          <button className="mt-6 btn-primary px-6 py-3 rounded-lg font-semibold">
            İncele
          </button>
        </div>

        {/* Sağ taraf (Değişiklik yok) */}
        <div className="flex-1">
          <div className="relative w-full h-72 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-primary)] transition-colors duration-300 overflow-hidden shadow-xl">
            <Image
              src={headerImage}
              alt={"Header İllüstrasyonu"}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Alt kısım (3 özellik sütunu - İçerik güncellendi) */}
      <div className="max-w-6xl mx-auto mt-20">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          {[
            {
              icon: "🤖", // Robot ikonu
              title: "Yanıt sürelerini azaltın",
              text: "Gelen müşteri taleplerine bir dakikadan daha kısa sürede otomatik olarak yanıt verin.",
              link: "Demo talep et >",
            },
            {
              icon: "👤", // Atama ikonu
              title: "Müşteri adaylarını anında atayın",
              text: "Gelen müşteri adaylarını manuel yetkilendirme ve yönlendirme olmadan doğru kişiye atayın.",
              link: "Platformu keşfedin >",
            },
            {
              icon: "⚡️", // Proaktif iletişim ikonu
              title: "Proaktif iletişim kurun",
              text: "Geçmiş veriler ve otomatik yanıtlarla müşteri ihtiyaçlarının bir adım önünde olun.",
              link: "Fiyatları inceleyin >",
            },
          ].map((item) => (
            <div key={item.title}>
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] mb-3">{item.text}</p>
              <a href="#" className="font-semibold text-[var(--accent-primary)] hover:text-[var(--accent-hover)] transition">
                {item.link}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Koyu mavi alt kısım */}
      <div className="mt-24 bg-[var(--bg-card)] pt-10 pb-20 px-15 rounded-[2rem] max-w-6xl mx-auto shadow-xl border border-[var(--border-primary)]">
        <h2 className="text-[var(--text-primary)] text-4xl font-bold text-center mb-12 [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">
          Mükemmel Müşteri Etkileşimi <br /> Bir Konuşmayla Başlar
        </h2>

        <div className="grid flex gap-8">
          {[
            {
              title: "Birlikte çalışın, daha hızlı para kazanın",
              desc: "Müşteri adaylarınızı, ekibinizle iş birliği yaparak ve onayları doğrudan Trengo'dan yöneterek hızla dönüştürün.",
              button: "Bugün başlayın >",
              image: togetherImage, // Bu görseli kendi görselinizle değiştirebilirsiniz
            },
            {
              title: "Etkili görüşmeler için zaman yaratın",
              desc: "Tekrarlayan rezervasyon ve ödeme görüşmelerinin otomasyonla ilerlemesini sağlayın. Böylece satış ekibiniz yüksek değerli anlaşmalara ve kusursuz hizmete daha fazla zaman ayırabilir.",
              button: "Deneyin >",
              image: meetImage, // Bu görseli kendi görselinizle değiştirebilirsiniz
            },
            {
              title: "Trendleri kârınızı etkilemeden önce tespit edin",
              desc: "Trengo'daki veri zekası, kanal performansınızı yakından izlemenize yardımcı olur ve satış hattınızın asla boş kalmamasını sağlar.",
              button: "Göz atın >",
              image: trendImage, // Bu görseli kendi görselinizle değiştirebilirsiniz
            },
            {
              title: "Yapay zeka ve otomasyon ile müşteri adayı oluşturmayı ölçeklendirin",
              desc: "Rezervasyonlar ve satın alımlar gibi dönüşümlerin akıcı kalmasını sağlayarak ürününüze olan ilgiyi artırın. Ekibiniz nitelikli müşteri adaylarına odaklanabilir.",
              button: "Kişiselleştirilmiş demo alın >",
              image: scabilityImage, // Bu görseli kendi görselinizle değiştirebilirsiniz
            },
          ].map((item, index) => {
            // Görselin sol tarafta mı sağ tarafta mı olacağını belirle
            const isImageOnLeft = index % 2 === 0; // Çift indexlilerde görsel solda, tek indexlilerde sağda olacak

return (
              // DÜZELTME 2: Grid yapısı basitleştirildi ve boşluklar responsive yapıldı.
              <div
                key={item.title}
                className="grid grid-cols-1 md:grid-cols-10 items-center gap-12 md:gap-20"
              >
                {/* DÜZELTME 3: Görsel her zaman önce yazılıyor ve `order` ile yeri değiştiriliyor */}
                <div
                  className={`
                    relative w-64 h-64 md:w-96 md:h-96 
                    rounded-full flex-shrink-0 overflow-hidden shadow-xl
                    mx-auto
                    col-span-5
                    ${!isImageOnLeft ? 'md:order-last' : 'md:order-first'}
                  `}
                >
                  <Image
                    src={item.image}
                    alt={item.title + " İllüstrasyonu"}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 60vw, 50vw"
                  />
                </div>

                {/* Metin Konteyneri */}
                <div className="text-center md:text-left border border-[var(--border-primary)] shadow-lg p-6 rounded-2xl col-span-5">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6">{item.desc}</p>
                  <button className="btn-primary px-5 py-2 rounded-lg font-semibold mx-auto md:mx-0">
                    {item.button}
                  </button>
                </div>
              </div>
            );
          })}
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