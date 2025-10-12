"use client";

import React, { useState } from "react";
import { featureCategories } from "./features";
import { plans, Plan } from "../(protected)/home/plans";

export default function PricingPage() {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Fiyatlandırma</span>
            <br />
            <span className="text-accent">Planları</span>
          </h1>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Size en uygun planı seçin ve 14 gün ücretsiz deneme ile hemen
            başlayın.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-primary">
        <div className="max-w-6xl mx-auto">
          {/* Pricing Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="rounded-xl p-6 flex flex-col justify-between border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: plan.popular
                    ? "var(--accent-primary)"
                    : "var(--border-primary)",
                  boxShadow: plan.popular
                    ? "0 10px 30px rgba(33, 150, 243, 0.2)"
                    : undefined,
                }}
                onMouseEnter={(e) => {
                  if (!plan.popular) {
                    e.currentTarget.style.borderColor = "var(--accent-primary)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.popular) {
                    e.currentTarget.style.borderColor = "var(--border-primary)";
                  }
                }}
              >
                {/* Populer  */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span
                      className="px-4 py-1 rounded-full text-sm font-semibold text-white"
                      style={{ backgroundColor: "var(--accent-primary)" }}
                    >
                      Popüler
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-accent mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">
                      {plan.price}
                    </span>
                    {plan.price !== "₺0" && (
                      <span className="text-secondary text-sm">/ay</span>
                    )}
                  </div>
                  <p className="text-secondary text-sm">{plan.period}</p>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-3 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-secondary">
                      <svg
                        className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="text-center">
                  <p className="text-secondary text-sm mb-4">{plan.duration}</p>
                  <button
                    className="w-full py-3 rounded-lg font-semibold transition-colors text-white"
                    style={{
                      backgroundColor: plan.popular
                        ? "var(--accent-primary)"
                        : "var(--bg-primary)",
                      color: plan.popular ? "white" : "var(--accent-primary)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = plan.popular
                        ? "var(--accent-hover)"
                        : "var(--bg-secondary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = plan.popular
                        ? "var(--accent-primary)"
                        : "var(--bg-primary)";
                    }}
                  >
                    {plan.price === "₺0" ? "Ücretsiz Başla" : "Satın Al"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Özellik Karşılaştırma Bölümü */}
      <section className="py-16 px-6 bg-secondary border-t border-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="inline-flex items-center text-accent text-xl font-semibold hover:text-accent-hover transition-colors"
            >
              {showAllFeatures
                ? "Özellik Karşılaştırmasını Gizle"
                : "Tüm Özellikleri Karşılaştır"}
              <svg
                className={`w-6 h-6 ml-2 transition-transform ${
                  showAllFeatures ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {showAllFeatures && (
            <div
              className="rounded-xl border overflow-hidden"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-primary)",
              }}
            >
              {/* Table Header */}
              <div
                className="grid grid-cols-5 border-b"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                }}
              >
                <div
                  className="p-4 font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Özellikler
                </div>
                <div
                  className="p-4 text-center font-semibold"
                  style={{ color: "var(--accent-primary)" }}
                >
                  Temel
                </div>
                <div
                  className="p-4 text-center font-semibold"
                  style={{ color: "var(--accent-primary)" }}
                >
                  Profesyonel
                </div>
                <div
                  className="p-4 text-center font-semibold"
                  style={{ color: "var(--accent-primary)" }}
                >
                  Premium
                </div>
                <div
                  className="p-4 text-center font-semibold"
                  style={{ color: "var(--accent-primary)" }}
                >
                  Kurumsal
                </div>
              </div>

              {/* Özellikler */}
              {featureCategories.map((category, categoryIdx) => (
                <div key={categoryIdx}>
                  {/* Category Header */}
                  <div
                    className="border-b px-4 py-3 category-header"
                    style={{
                      borderColor: "var(--border-primary)",
                    }}
                  >
                    <h4
                      className="font-semibold text-lg"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      {category.category}
                    </h4>
                  </div>

                  {/* Bu kategori altındaki özellikler */}
                  {category.features.map((feature, featureIdx) => (
                    <div
                      key={featureIdx}
                      className="grid grid-cols-5 border-b transition-colors feature-table-row"
                      style={{
                        borderColor: "var(--border-primary)",
                      }}
                    >
                      <div
                        className="p-4"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {feature.name}
                      </div>

                      {/* Her plan için özellik durumu */}
                      {["temel", "profesyonel", "premium", "kurumsal"].map(
                        (plan) => (
                          <div key={plan} className="p-4 text-center">
                            {feature[plan as keyof typeof feature] ===
                              "available" && (
                              <div className="flex justify-center">
                                <svg
                                  className="w-5 h-5 text-green-500"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            )}

                            {feature[plan as keyof typeof feature] ===
                              "unavailable" && (
                              <div className="flex justify-center">
                                <div
                                  className="w-5 h-0.5 my-2 rounded-sm"
                                  style={{
                                    backgroundColor: "var(--text-secondary)",
                                    opacity: 0.5,
                                  }}
                                ></div>
                              </div>
                            )}

                            {feature[plan as keyof typeof feature] ===
                              "extra" && (
                              <div className="flex justify-center">
                                <span
                                  className="text-xs text-center"
                                  style={{ color: "var(--text-secondary)" }}
                                >
                                  Senelik alımda aylık temsilci
                                  <br />
                                  başına ₺175
                                </span>
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
