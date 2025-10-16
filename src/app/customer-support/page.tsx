"use client";

import React from "react";

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
                From chaos
                <br />
                to control,
                <br />
                <span style={{ color: "var(--accent-primary)" }}>
                  all contacts
                </span>
                <br />
                in one place
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

              {/* Floating Elements */}
              <div className="absolute -bottom-4 -right-4">
                <div
                  className="px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                  style={{
                    backgroundColor: "var(--status-success)",
                    color: "white",
                  }}
                >
                  24/7 Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerSupportPage;
