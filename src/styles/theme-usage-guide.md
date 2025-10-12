/\*
🎨 Tema Renkleri Kullanım Kılavuzu

Artık şu Tailwind sınıflarını kullanabilirsiniz:

BACKGROUND COLORS:

- bg-primary → Ana arka plan
- bg-secondary → İkincil arka plan
- bg-card → Kart arka planı

TEXT COLORS:

- text-primary → Ana metin rengi
- text-secondary → İkincil metin rengi
- text-accent → Vurgu metin rengi

BORDER COLORS:

- border-primary → Ana border rengi
- border-accent → Vurgu border rengi

ACCENT COLORS:

- bg-accent → Vurgu arka plan
- bg-accent-hover → Vurgu hover arka plan

STATUS COLORS:

- bg-success / text-success → Başarı rengi (#4CAF50)
- bg-warning / text-warning → Uyarı rengi (#FFC107)
- bg-error / text-error → Hata rengi (#F44336)

ÖRNEK KULLANIM:

<div className="bg-primary text-primary border border-primary">
  Bu div her iki temada da doğru renkleri gösterir!
</div>

<button className="bg-accent hover:bg-accent-hover text-white">
  Tema uyumlu buton
</button>

<div className="bg-card text-secondary border-primary">
  Kart container
</div>

NOT: Bu sınıflar otomatik olarak light/dark mode'da farklı renkler alır!
\*/
