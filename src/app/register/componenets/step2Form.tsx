"use client";

import { useState, useMemo } from "react";

// Tema değişkenlerini kullanabilmek için mock bir yapı varsayılmıştır.
// Gerçek uygulamada bu değişkenler CSS dosyanızdan otomatik gelecektir.
// Varsayılan değerler:
const CURRENT_STEP = 2;
const TOTAL_STEPS = 4;

// Özellik kategorilerini tanımlayan sabit yapı
const FEATURES_CONFIG = [
    {
        title: "Sohbet Penceresi",
        key: "chatWindow",
        options: [
            { key: "preChatButtons", label: "Sohbet öncesi butonlar" },
            { key: "fileTransfer", label: "Dosya gönderme/alma" },
        ],
    },
    {
        title: "Agent & Mesaj",
        key: "agentMessage",
        options: [
            { key: "draftReplies", label: "Taslak cevaplar", defaultChecked: true },
            { key: "multiChat", label: "Çoklu temsilcili sohbetler" },
            { key: "agentAssignment", label: "Temsilci atama" },
        ],
    },
    {
        title: "Chatbot & Yapay Zeka",
        key: "chatbotAI",
        options: [
            { key: "qnaBot", label: "Soru-cevap botu" },
            { key: "summary", label: "Özet çıkarma", defaultChecked: true },
            { key: "spellCheck", label: "Yazım denetimi", defaultChecked: true },
        ],
    },
    {
        title: "CRM & Sipariş",
        key: "crmOrder",
        options: [
            { key: "customerProfile", label: "Müşteri profili" },
            { key: "orderSync", label: "Sipariş senkronizasyonu" },
            { key: "invoiceIntegration", label: "Fatura entegrasyonu", defaultChecked: true },
        ],
    },
];

export default function Step2Form({ onBack, onNext }: { onBack?: () => void, onNext?: () => void }) {
    
    // Tüm seçeneklerin durumunu tutan ana state
    const [featureStates, setFeatureStates] = useState(() => {
        const initialState: { [key: string]: boolean } = {};
        FEATURES_CONFIG.forEach(group => {
            group.options.forEach(option => {
                initialState[option.key] = option.defaultChecked || false;
            });
        });
        return initialState;
    });

    // Açılır-kapanır (accordion) durumunu tutan state
    const [openAccordion, setOpenAccordion] = useState<string | null>("chatWindow"); // İlk grubu açık başlat

    const handleFeatureToggle = (key: string) => {
        setFeatureStates(prev => ({ ...prev, [key]: !prev[key] }));
    };
    
    const handleAccordionToggle = (key: string) => {
        setOpenAccordion(openAccordion === key ? null : key);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Seçilen Özellikler:", featureStates);
        onNext ? onNext() : alert("Adım 3'e Devam Ediliyor...");
    };

    const progressPercentage = (CURRENT_STEP / TOTAL_STEPS) * 100;


    // Her bir grup için render edilecek bileşeni oluşturur
    const FeatureGroup = ({ config }: { config: typeof FEATURES_CONFIG[0] }) => {
        const isOpen = openAccordion === config.key;

        return (
            <div className="mb-4 border border-[var(--border-primary)] rounded-xl overflow-hidden">
                {/* Accordion Başlığı */}
                <button
                    type="button"
                    onClick={() => handleAccordionToggle(config.key)}
                    className="w-full flex justify-between items-center p-4 bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] transition duration-200"
                >
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                        {config.title}
                    </h3>
                    <svg
                        className={`w-5 h-5 text-[var(--text-secondary)] transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>

                {/* İçerik Kısmı */}
                <div 
                    className={`transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 p-4 pt-2' : 'max-h-0 opacity-0 p-0 overflow-hidden'}`}
                    style={{ maxHeight: isOpen ? '500px' : '0' }} // Tailwind'de max-h-96 gibi sabitler bazen yetersiz kalabilir.
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {config.options.map(option => (
                            <button
                                key={option.key}
                                type="button"
                                onClick={() => handleFeatureToggle(option.key)}
                                className={`flex items-center justify-between p-3 rounded-lg border transition-colors duration-150 ${
                                    featureStates[option.key]
                                        ? "bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white"
                                        : "bg-[var(--bg-secondary)] border-[var(--border-primary)] text-[var(--text-primary)] hover:border-[var(--accent-primary)]"
                                }`}
                            >
                                <span className="text-sm font-medium">
                                    {option.label}
                                </span>
                                {featureStates[option.key] && (
                                    <svg className="w-5 h-5 text-white ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="w-full">
            
            {/* --- Adım Sayacı (Step Counter) --- */}
            <div className="mb-8">
                <p className="text-[var(--accent-primary)] font-semibold mb-2 text-center">
                    Adım {CURRENT_STEP} / {TOTAL_STEPS}
                </p>
                <div className="w-full h-2 bg-[var(--bg-primary)] rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-[var(--accent-primary)] transition-all duration-500"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-8 text-center">
                Özellik Seçimi
            </h2>
            
            <form onSubmit={handleSubmit}>
                {FEATURES_CONFIG.map(group => (
                    <FeatureGroup key={group.key} config={group} />
                ))}

                {/* Devam Et ve Geri Butonları */}
                <div className="flex justify-between mt-8 pt-4 border-t border-[var(--border-primary)]">
                    <button
                        type="button"
                        onClick={onBack}
                        className="py-2 px-6 text-[var(--text-secondary)] font-semibold rounded-lg hover:text-[var(--accent-primary)] transition duration-200"
                    >
                        <span className="flex items-center">
                           <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                           Geri
                        </span>
                    </button>
                    
                    <button
                        type="submit"
                        className="py-2 px-6 bg-[var(--accent-primary)] text-white font-semibold rounded-lg shadow-md hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition duration-200"
                    >
                        Devam Et
                    </button>
                </div>
            </form>
        </div>
    );
}