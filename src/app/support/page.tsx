"use client";

import React from "react";
import Image from "next/image";
import headerImage from '../../assets/support/header.png';
import qualityImage from '../../assets/support/quality.png';
import reletionsImage from '../../assets/support/relations.png';
import scabilityImage from '../../assets/support/scability.png';
import satisfactionImage from '../../assets/support/satisfaction.png';

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
          <div className="flex-1">
            {/* - `relative` ekledik, çünkü `fill` prop'u bunu gerektirir.
    - `overflow-hidden` ekledik, böylece resmin köşeleri de yuvarlatılmış olur.
    - `flex items-center...` kaldırdık, çünkü artık resim tüm alanı kaplayacak.
  */}
            <div className="relative w-full h-72 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-primary)] transition-colors duration-300 overflow-hidden shadow-xl">
              <Image
                src={headerImage}
                alt={"Header İllüstrasyonu"}
                fill // Ebeveyn div'i (h-72 olan) tamamen doldurur
                style={{ objectFit: 'cover' }} // 'cover' orantıyı koruyarak kaplar
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
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
      <div className="mt-24 bg-[var(--bg-card)] pt-10 pb-20 px-15 rounded-[2rem] max-w-6xl mx-auto shadow-xl border border-[var(--border-primary)]">
        <h2 className="text-[var(--text-primary)] text-4xl font-bold text-center mb-12 [text-shadow:2px_2px_4px_rgba(0,0,0,0.3)]">
          Mükemmel Müşteri Etkileşimi <br /> Bir Konuşmayla Başlar
        </h2>

        <div className="grid flex gap-8">
          {[
            {
              title: "Kalite veya hızdan ödün vermeyin",
              desc: "Gelen sıkça sorulan soruların %50'ye kadarını otomatikleştirin, böylece ekibiniz müşterilerinizin daha karmaşık sorularına ve ihtiyaçlarına odaklanabilir.",
              button: "Buradan başlayın",
              image: qualityImage,
            },
            {
              title: "Müşteri memnuniyetini yüksek, ekip moralini daha yüksek tutun",
              desc: "Görüşme sayısı, yanıt süresi ve müşteri memnuniyeti gibi temel performans göstergelerini sektör ölçütlerine göre takip edin.",
              button: "Şimdi başla",
              image: satisfactionImage,
            },
            {
              title: "Gelir getiren ilişkiler kurun",
              desc: "Satın alma geçmişlerine dayanarak müşterilerinize yaklaşan promosyonlar ve teklifler hakkında proaktif olarak bilgi vermek için kişiselleştirilmiş mesajlar kullanın.",
              button: "Nasıl olduğunu keşfedin",
              image: reletionsImage,
            },
            {
              title: "Yapay zeka ve otomasyon ile müşteri deneyiminizi ölçeklendirin",
              desc: "Büyümenizin temel taşı olarak müşteri etkileşimini benimseyin; işinizi ilerletmek için görüşmeleri, ekibinizin müşteri memnuniyetine odaklanmasını sağlamak için otomasyonu kullanın.",
              button: "Demo talep et",
              image: scabilityImage,
            },
          ].map((item, index) => {
            // Görselin sol tarafta mı sağ tarafta mı olacağını belirle
            const isImageOnLeft = index % 2 === 0; // Çift indexlilerde görsel solda, tek indexlilerde sağda olacak

            return (
              <div
                key={item.title}
                // 1. Grid'i 5 sütuna bölüyoruz (md:grid-cols-5).
                //    Bu, alan dağılımında bize daha fazla esneklik sağlar.
                // 2. Boşluğu biraz daha artırabiliriz (gap-20).
                className="grid grid-cols-1 md:grid-cols-10 items-center gap-20"
              >
                {/* Görsel Konteyneri */}
                <div
                  className={`
                    relative w-96 h-96 rounded-full flex-shrink-0 overflow-hidden shadow-xl
                    mx-auto 
                    md:col-span-5 
                    ${!isImageOnLeft ? 'md:order-last md:justify-self-end' : 'md:justify-self-start'}
                  `}
                >
                  <Image
                    src={item.image}
                    alt={item.title + " İllüstrasyonu"}
                    fill
                    style={{ objectFit: 'cover' }}
                    // 3. Görsel artık daha büyük bir alanı kapladığı için sizes prop'unu güncelliyoruz.
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>

                {/* Metin Konteyneri */}
                {/* 4. Metin kutusuna 5 sütundan 2'sini veriyoruz (md:col-span-2). */}
                <div className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-primary)] shadow-lg flex flex-col justify-center hover:shadow-xl transition-shadow md:col-span-5">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] mb-6">{item.desc}</p>
                  <button className="btn-primary px-5 py-2 rounded-lg font-semibold self-start">
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