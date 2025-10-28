"use client";

import React from "react";
import AllCommunicationSection from "./_components/AllCommunicationSection";

import InboxFeaturesSection from "./_components/InboxFeaturesSection";
const CustomerSupportPage: React.FC = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Hero Section - From chaos to control */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-center">
            {/* Left Side - Content */}
            <div className="max-w-lg">
              <div className="mb-3">
                <span
                  className="text-sm font-medium tracking-wide uppercase"
                  style={{ color: "var(--text-secondary)" }}
                >
                  OMNICHANNEL INBOX
                </span>
              </div>

              <h1
                className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Kaostan
                <br />
                düzene,
                <br />
                <span style={{ color: "var(--accent-primary)" }}>
                  tüm iletişimler
                </span>
                <br />
                tek bir yerde
              </h1>

              <p
                className="text-lg mb-8 leading-relaxed max-w-md"
                style={{ color: "var(--text-secondary)" }}
              >
                Dağınık halde olan konuşmaları tek inbox'ta toplayın. Potansiyel
                müşteri ve mevcut müşteri konuşmalarını tek bir yerde yönetin.
                %95 kolay kullanım inbox'ta tüm kanalları dahil edin.
              </p>

              <button
                className="px-8 py-3 rounded-lg font-medium text-white transition-all duration-300"
                style={{ backgroundColor: "var(--accent-primary)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent-hover)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--accent-primary)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Get a demo
              </button>
            </div>

            {/* Right Side - Dashboard Interface */}
            <div className="relative">
              <div
                className="rounded-2xl shadow-2xl border overflow-hidden"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-primary)",
                }}
              >
                {/* Left Sidebar - Channels */}
                <div className="grid grid-cols-5 h-96">
                  {/* Sidebar */}
                  <div
                    className="col-span-2 p-6 border-r"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      borderColor: "var(--border-primary)",
                    }}
                  >
                    {/* Inbox Header */}
                    <div className="flex items-center justify-between mb-6">
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Inbox
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div
                          className="px-2 py-1 rounded text-xs"
                          style={{
                            backgroundColor: "var(--bg-primary)",
                            color: "var(--text-secondary)",
                          }}
                        >
                          New
                        </div>
                        <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            3
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Channels List */}
                    <div>
                      <h4
                        className="text-xs font-medium mb-3 uppercase tracking-wide"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Channels
                      </h4>
                      <div className="space-y-1">
                        {[
                          {
                            name: "WhatsApp",
                            icon: "💬",
                            color: "bg-green-500",
                            count: 2,
                            avatars: 2,
                          },
                          {
                            name: "Instagram",
                            icon: "📷",
                            color: "bg-pink-500",
                            count: 1,
                            avatars: 1,
                          },
                          {
                            name: "Facebook",
                            icon: "👤",
                            color: "bg-blue-500",
                            count: 4,
                            avatars: 3,
                          },
                          {
                            name: "Web",
                            icon: "🌐",
                            color: "bg-gray-500",
                            count: 0,
                            avatars: 2,
                          },
                          {
                            name: "Voice",
                            icon: "📞",
                            color: "bg-purple-500",
                            count: 0,
                            avatars: 1,
                          },
                        ].map((channel, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-opacity-50 cursor-pointer transition-all"
                            style={{
                              backgroundColor:
                                index === 0
                                  ? "var(--accent-primary)"
                                  : "transparent",
                            }}
                          >
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-6 h-6 rounded-full ${channel.color} flex items-center justify-center`}
                              >
                                <span className="text-white text-xs">
                                  {channel.icon}
                                </span>
                              </div>
                              <span
                                className="text-sm font-medium"
                                style={{
                                  color:
                                    index === 0
                                      ? "white"
                                      : "var(--text-primary)",
                                }}
                              >
                                {channel.name}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex -space-x-1">
                                {[...Array(channel.avatars)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="w-4 h-4 rounded-full border border-white"
                                    style={{
                                      backgroundColor: `hsl(${
                                        i * 80
                                      }, 60%, 60%)`,
                                    }}
                                  />
                                ))}
                              </div>
                              {channel.count > 0 && (
                                <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">
                                    {channel.count}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Team Partners Section */}
                    <div className="mt-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <div
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: "var(--accent-primary)",
                            color: "white",
                          }}
                        >
                          All Business Partners
                        </div>
                        <div
                          className="px-3 py-1 rounded-full text-xs"
                          style={{
                            backgroundColor: "var(--bg-primary)",
                            color: "var(--text-secondary)",
                          }}
                        >
                          Office Business Partners
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-xs">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <span style={{ color: "var(--text-secondary)" }}>
                          1,925 active
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Main Chat Area */}
                  <div className="col-span-3 p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                        <span className="text-white font-medium">A</span>
                      </div>
                      <div>
                        <h4
                          className="font-medium"
                          style={{ color: "var(--text-primary)" }}
                        >
                          Hi there, I would like to know more about your product
                        </h4>
                        <p
                          className="text-xs"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          via Facebook • 4 minutes
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div
                        className="p-3 rounded-lg max-w-xs"
                        style={{
                          backgroundColor: "var(--bg-secondary)",
                          color: "var(--text-primary)",
                        }}
                      >
                        <p className="text-sm">
                          Hello! Thank you for your interest. I'd be happy to
                          help you learn more about our products.
                        </p>
                      </div>

                      <div className="flex justify-end">
                        <div
                          className="p-3 rounded-lg max-w-xs"
                          style={{
                            backgroundColor: "var(--accent-primary)",
                            color: "white",
                          }}
                        >
                          <p className="text-sm">
                            Great! Can you tell me about the pricing plans?
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Typing Indicator */}
                    <div className="flex items-center space-x-2 mt-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                        <div
                          className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        AI is typing...
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Favori Kanallar - Wide Section */}
      <section
        className="w-full max-w-7xl mx-auto rounded-2xl my-12 py-12 px-4 md:px-16 flex flex-col items-center justify-center bg-white dark:bg-gradient-to-br dark:from-[#0a1837] dark:to-[#162447] text-gray-900 dark:text-white shadow-lg"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Favori kanalınızı omnichannel ekibimizin gelen kutusuna bağlayın
        </h2>
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          {/* Kanal emojileri */}
          <span className="bg-gray-100 dark:bg-white/10 rounded-full p-4 text-4xl flex items-center justify-center hover:bg-green-100 dark:hover:bg-green-500 transition cursor-pointer border border-gray-200 dark:border-none">
            💬
          </span>
          <span className="bg-gray-100 dark:bg-white/10 rounded-full p-4 text-4xl flex items-center justify-center hover:bg-pink-100 dark:hover:bg-pink-500 transition cursor-pointer border border-gray-200 dark:border-none">
            📷
          </span>
          <span className="bg-gray-100 dark:bg-white/10 rounded-full p-4 text-4xl flex items-center justify-center hover:bg-red-100 dark:hover:bg-red-500 transition cursor-pointer border border-gray-200 dark:border-none">
            📧
          </span>
          <span className="bg-gray-100 dark:bg-white/10 rounded-full p-4 text-4xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-500 transition cursor-pointer border border-gray-200 dark:border-none">
            💭
          </span>
          <span className="bg-gray-100 dark:bg-white/10 rounded-full p-4 text-4xl flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-700 transition cursor-pointer border border-gray-200 dark:border-none">
            👥
          </span>
          <span className="bg-gray-100 dark:bg-white/10 rounded-full p-4 text-4xl flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-500 transition cursor-pointer border border-gray-200 dark:border-none">
            📞
          </span>
          <span className="bg-gray-100 dark:bg-white/10 rounded-full p-4 text-4xl flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-700 transition cursor-pointer border border-gray-200 dark:border-none">
            💬
          </span>
        </div>
        <div className="text-center mb-4 font-semibold text-green-600 dark:text-green-400 text-lg">
          Müşteri tercihli kanal deneyimi:{" "}
          <span className="font-bold">WhatsApp</span>
        </div>
        <p className="text-center text-base text-gray-600 dark:text-white/80 max-w-2xl mx-auto">
          WhatsApp üzerinden etkileşimin nasıl göründüğünü test edin.
          Telefonunuza bir mesaj gönderin ve günün her anında AI destekli
          müşteri temsilcisiyle iletişime geçin.
        </p>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6 leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Tüm konuşmalara genel bakış
              </h2>
              <p
                className="text-lg mb-6 leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                AI, otomasyon ve takım mesaj kutusunu içeren bir takımla
                çalışın.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Konuşmaları kolayca otomatik olarak kapatın, cevaplara yardımcı
                olmak için iş arkadaşlarını etiketleyin ve AI'ı SSS'leri
                yanıtlamak için kullanın. Yürütülebilir iş akışları kurun ve en
                iyi hizmeti sunun.
              </p>
            </div>

            {/* Right Side - Messages Card */}
            <div className="relative">
              <div
                className="rounded-2xl shadow-2xl p-8 border"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <div className="space-y-4">
                  {[
                    {
                      avatar: "https://i.pravatar.cc/150?img=1",
                      message: "Paketim gelmedi",
                      subtext: "Satış'a atandı",
                      icon: "📧",
                      iconBg: "bg-red-500",
                    },
                    {
                      avatar: "https://i.pravatar.cc/150?img=2",
                      message: "Flo'nun cevabı yardımcı oldu 👍",
                      subtext: "Pazarlama Ekibine atandı",
                      icon: "💬",
                      iconBg: "bg-green-500",
                    },
                    {
                      avatar: "https://i.pravatar.cc/150?img=3",
                      message: "Hesabıma erişemiyorum...",
                      subtext: "Müşteri Başarısı'na atandı",
                      icon: "📷",
                      iconBg: "bg-pink-500",
                    },
                    {
                      avatar: "https://i.pravatar.cc/150?img=4",
                      message: "Bu turları rezerve edebilir miyim?",
                      subtext: "Satış'a atandı",
                      icon: "👥",
                      iconBg: "bg-blue-500",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 flex items-center space-x-3 hover:scale-105 transition-transform cursor-pointer shadow-md"
                    >
                      <img
                        src={item.avatar}
                        alt="User"
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium text-sm">
                          {item.message}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          {item.subtext}
                        </p>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full ${item.iconBg} flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="text-sm">{item.icon}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 360 View Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Contact Timeline Card */}
            <div className="relative order-2 lg:order-1">
              <div
                className="rounded-2xl shadow-2xl p-8 border"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <div
                  className="bg-white rounded-xl p-6"
                  style={{ maxHeight: "550px", overflowY: "auto" }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900">
                      İletişim anları
                    </h3>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        date: "5 Ağu",
                        time: "12 Kasım 2024 - 19:30",
                        title: "İstek, sipariş onayı gereklidir",
                        channel: "💬 WhatsApp",
                        channelColor: "text-green-600",
                        icon: "📝",
                      },
                      {
                        date: "Zoe",
                        time: "5 Kasım 2024 - 12:46",
                        title: "Hayır, bir paketiniz bu kayıt",
                        channel: "📧 Email",
                        channelColor: "text-red-600",
                        icon: "✉️",
                      },
                      {
                        date: "Zoe",
                        time: "5 Ekim 2024 - 10:35",
                        title: "Hey Fran, size nasıl yardım edelim?",
                        channel: "💬 WhatsApp",
                        channelColor: "text-green-600",
                        icon: "💬",
                      },
                      {
                        date: "Zoe",
                        time: "3 Ara 2023 - 14:20",
                        title: "Merhaba Ekibi",
                        channel: "📞 Voice",
                        channelColor: "text-purple-600",
                        icon: "📞",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-gray-200 pl-4 pb-4 relative"
                      >
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></div>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-xs text-gray-500 mb-1">
                              {item.date}
                            </p>
                            <p className="text-xs text-gray-400 mb-2">
                              {item.time}
                            </p>
                            <p className="text-sm font-medium text-gray-900 mb-1">
                              {item.title}
                            </p>
                            <p
                              className={`text-xs font-medium ${item.channelColor}`}
                            >
                              {item.channel}
                            </p>
                          </div>
                          <span className="text-xl ml-4">{item.icon}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <h2
                className="text-3xl lg:text-4xl font-bold mb-6 leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Müşteriye her zaman 360 derece bakış açısı
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Müşteri profillerini konuşmanın yanında gösterin. Müşteriler
                geçen hafta WhatsApp'ta doğrudan mesaj gönderirse, bugün e-posta
                gönderirse ve şu anda arıyorsa bu önemli değil. Ekibiniz her
                zaman güncel bilgilere sahiptir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inbox Features Section */}
      <InboxFeaturesSection />

      {/*AllCommunicationSection*/}
      <AllCommunicationSection />
    </div>
  );
};

export default CustomerSupportPage;
