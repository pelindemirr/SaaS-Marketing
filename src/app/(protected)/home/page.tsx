"use client";

import React from "react";
import { plans, Plan } from "./plans";

const PricingPanel: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 px-6">
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
            <button
              className="border px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              style={{
                borderColor: "var(--border-primary)",
                color: "var(--text-primary)",
              }}
            >
              Demo İzle
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Size Uygun Planı Seçin
            </h2>
            <p className="text-xl text-secondary">
              14 gün ücretsiz deneme ile hemen başlayın
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`plan-card rounded-xl p-6 flex flex-col justify-between border relative ${
                  plan.popular ? "popular" : ""
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="btn-primary px-4 py-1 rounded-full text-sm font-semibold">
                      Popüler
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 accent-primary">
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
                        className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                        style={{ color: "var(--status-success)" }}
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
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      plan.popular ? "btn-primary" : "btn-secondary border-2"
                    }`}
                    style={{
                      borderColor: plan.popular
                        ? "transparent"
                        : "var(--border-primary)",
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
    </div>
  );
};

export default PricingPanel;
