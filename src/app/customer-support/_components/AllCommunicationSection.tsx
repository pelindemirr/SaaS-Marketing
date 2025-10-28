"use client";

import React from "react";
import { motion } from "framer-motion";

const channels = [
  { icon: "💬", name: "WhatsApp" },
  { icon: "👥", name: "Facebook" },
  { icon: "📷", name: "Instagram" },
  { icon: "📧", name: "E-mail" },
  { icon: "💭", name: "Telegram" },
  { icon: "✉️", name: "Gmail" },
  { icon: "📞", name: "VoIP" },
  { icon: "📮", name: "Outlook" },
];

const AllCommunicationSection: React.FC = () => {
  return (
    <section className="py-24 bg-bg-secondary text-text-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Başlık */}
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Tüm iletişim tek bir yerde
        </h2>
        <p className="max-w-2xl mx-auto text-text-secondary mb-12">
          Tekrarlayan sorulara zaman ve para harcamayı bırakın. Bu projeden tüm
          iletişim kanallarınıza <strong>CCPilot</strong> üzerinden
          ulaşabilirsiniz.
        </p>

        {/* CCPilot ve Kanallar */}
        <div className="relative flex flex-row items-center w-full max-w-4xl">
          {/* CCPilot */}
          <motion.div
            className="flex items-center justify-center w-28 h-28 rounded-xl shadow-lg border border-border-primary bg-bg-card text-2xl font-bold text-purple-600 z-10"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            CCPilot
          </motion.div>

          {/* Modern çizgiler */}
          <div className="flex-1 relative mx-6 mt-2 h-20">
            <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
            <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full"></div>
          </div>

          {/* Kanal ikonları */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 z-10 ml-auto">
            {channels.map((c, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-border-primary backdrop-blur-sm bg-bg-card hover:scale-105 transition-transform duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-3 bg-gradient-to-br from-blue-500 to-blue-700 text-white text-2xl">
                  {c.icon}
                </div>
                <span className="text-text-primary font-medium">{c.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCommunicationSection;
