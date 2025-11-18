"use client";

import { useState } from "react";

// Form sabitleri
const CURRENT_STEP = 3;
const TOTAL_STEPS = 4;

// Özellik kategorilerini ve içindeki seçenekleri tanımlayan sabit yapı
const FEATURES_CONFIG = [
    {
        title: "Pazarlama & Analitik",
        key: "marketingAnalytics",
        type: "checkbox", // Bu bölüm Checkbox kullanacak
        options: [
            { key: "campaigns", label: "Etkileşimli mesaj kampanyaları" },
            { key: "stats", label: "Pazarlama istatistikleri" },
            { key: "googleAnalytics", label: "Google Analytics Entegrasyonu" },
            { key: "feedback", label: "Müşteriler tarafından servis kalitesi geri bildirimleri" },
        ],
    },
    {
        title: "Operasyon & Ekip Yönetimi",
        key: "operationTeam",
        type: "checkbox", // Bu bölüm Checkbox kullanacak
        options: [
            { key: "internalChat", label: "Ekip içi sohbet" },
            { key: "chatRescue", label: "Sohbet kurtarma" },
            { key: "agentStats", label: "Temsilci istatistikleri" },
            { key: "chatRouting", label: "Sohbet yönlendirme" },
            { key: "channelCopy", label: "Kanalların ayarlarıyla kopyalama" },
            { key: "permissions", label: "Çalışanların erişim hakları ve rollerini düzenleme" },
        ],
    },
    {
        title: "Ziyaretçi İzleme & Yönlendirme",
        key: "visitorTracking",
        type: "toggle", // Bu bölüm Toggle Button kullanacak
        options: [
            { key: "smartRouting", label: "Akıllı yönlendirme" },
            { key: "liveTracking", label: "Canlı ziyaretçi takibi ve sitedeki ziyaretçiye manuel mesaj gönderme", defaultChecked: true },
            { key: "emailIntegration", label: "E-posta entegrasyonu", defaultChecked: true },
            { key: "campaignTrigger", label: "Kampanya tetikleyici" },
        ],
    },
];

export default function Step3Form({ onBack, onNext }: { onBack: () => void, onNext: () => void}) {
    
    const currentStep = CURRENT_STEP;
    const totalSteps = TOTAL_STEPS;

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
    const [openAccordion, setOpenAccordion] = useState<string | null>("visitorTracking"); // Ziyaretçi Takibi'ni açık başlat

    const handleFeatureToggle = (key: string) => {
        setFeatureStates(prev => ({ ...prev, [key]: !prev[key] }));
    };
    
    const handleAccordionToggle = (key: string) => {
        setOpenAccordion(openAccordion === key ? null : key);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Seçilen Özellikler (Adım 3):", featureStates);
        onNext(); // Formu bitirir
    };

    const progressPercentage = (currentStep / totalSteps) * 100;

    // Tek bir Checkbox/Toggle butonu render eden yardımcı bileşen
    const FeatureItem = ({ option, groupType }: { option: typeof FEATURES_CONFIG[0]['options'][0], groupType: 'checkbox' | 'toggle' }) => {
        const isChecked = featureStates[option.key];
        
        // Checkbox stilleri (Toggle'a göre daha sade)
        if (groupType === 'checkbox') {
            return (
                <label className="flex items-center space-x-2 text-[var(--text-primary)] cursor-pointer">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleFeatureToggle(option.key)}
                        className="form-checkbox h-5 w-5 rounded-md border-[var(--border-primary)] bg-[var(--bg-primary)] text-[var(--accent-primary)] focus:ring-[var(--accent-primary)]"
                        style={{ '--tw-ring-color': 'var(--accent-primary)' } as React.CSSProperties} // Tema rengini doğrudan uygula
                    />
                    <span className="text-sm">{option.label}</span>
                </label>
            );
        }

        // Toggle Button stilleri (Görseldeki gibi vurgulu)
        return (
            <button
                type="button"
                onClick={() => handleFeatureToggle(option.key)}
                className={`flex items-center justify-between p-3 rounded-lg border-2 transition-colors duration-150 text-sm w-full h-full text-left ${
                    isChecked
                        ? "bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white"
                        : "bg-[var(--bg-secondary)] border-[var(--border-primary)] text-[var(--text-primary)] hover:border-[var(--accent-primary)]"
                }`}
            >
                <span className="font-medium">{option.label}</span>
                {isChecked && (
                    <svg className="w-5 h-5 text-white ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                )}
            </button>
        );
    };

    // Her bir grup için render edilecek bileşen
    const FeatureGroup = ({ config }: { config: typeof FEATURES_CONFIG[0] }) => {
        const isOpen = openAccordion === config.key;

        // Checkbox grupları için 2 sütunlu düzen, Toggle grupları için 3/2 sütunlu düzen
        const gridLayoutClass = config.type === 'checkbox' ? "grid-cols-2" : "grid-cols-1 md:grid-cols-3 sm:grid-cols-2";

        return (
            <div className="mb-6 border border-[var(--border-primary)] rounded-xl overflow-hidden">
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
                    className={`transition-max-height duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 p-4 pt-2' : 'max-h-0 opacity-0 p-0 overflow-hidden'}`}
                    style={{ maxHeight: isOpen ? '500px' : '0' }}
                >
                    <div className={`grid gap-3 ${gridLayoutClass}`}>
                        {config.options.map(option => (
                            <FeatureItem key={option.key} option={option} groupType={config.type as 'checkbox' | 'toggle'} />
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
                Pazarlama ve Operasyon Özellikleri
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
                        onClick={()=> onNext && onNext()}
                    >
                        Bitir
                    </button>
                </div>
            </form>
        </div>
    );
}