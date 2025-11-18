"use client";

import { useState } from "react";

// Adım sayacı için kullanılan sabitler
const TOTAL_STEPS = 3;
const CURRENT_STEP = 1;

export default function Step1Form({ onNext }: { onNext?: () => void }) {
    const [monthlyMessages, setMonthlyMessages] = useState("10.000");
    const [agentCount, setAgentCount] = useState("10");
    const [channels, setChannels] = useState({
        whatsapp: false,
        website: true,
    });

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>, callback: (value: string) => void) => {
        callback(e.target.value);
    };

    const handleChannelToggle = (channel: keyof typeof channels) => {
        setChannels(prev => ({ ...prev, [channel]: !prev[channel] }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Verileri:", { monthlyMessages, agentCount, channels });
        // API isteği veya sonraki adıma yönlendirme mantığı buraya eklenecek
    };
    
    // Değerleri yüzdeye çeviren yardımcı fonksiyon
    const calculateProgress = (value: string, options: string[]) => {
        const index = options.indexOf(value);
        if (index === -1) return 0;
        return (index / (options.length - 1)) * 100;
    };

    const messageOptions = ["1.000", "10.000", "100.000", "100.000+"];
    const agentOptions = ["2", "10", "100", "100+"];

    const messageProgress = calculateProgress(monthlyMessages, messageOptions);
    const agentProgress = calculateProgress(agentCount, agentOptions);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] px-4 py-8">
            <div className="w-full max-w-4xl border border-[var(--border-primary)] bg-[var(--bg-secondary)] rounded-xl shadow-lg p-10">
                
                {/* --- Adım Sayacı (Step Counter) --- */}
                <div className="mb-10">
                    <p className="text-[var(--accent-primary)] font-semibold mb-2">
                        Adım {CURRENT_STEP} / {TOTAL_STEPS}
                    </p>
                    <div className="w-full h-2 bg-[var(--bg-primary)] rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-[var(--accent-primary)] transition-all duration-500"
                            style={{ width: `${(CURRENT_STEP / TOTAL_STEPS) * 100}%` }}
                        ></div>
                    </div>
                </div>
                {/* --------------------------------- */}

                <form onSubmit={handleSubmit}>
                    
                    {/* #1 Mesaj Kanalları Bölümü */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 border-b border-[var(--border-primary)] pb-2">
                            Mesaj Kanalları
                        </h3>
                        <p className="text-[var(--text-secondary)] mb-4">
                            Facebook, Instagram, Viber, Telegram entegrasyonları standart olarak dahildir.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* WhatsApp Entegrasyonu */}
                            <button
                                type="button"
                                onClick={() => handleChannelToggle('whatsapp')}
                                className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 ${
                                    channels.whatsapp
                                        ? "bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white"
                                        : "bg-[var(--bg-primary)] border-[var(--border-primary)] text-[var(--text-primary)] hover:border-[var(--accent-primary)]"
                                }`}
                            >
                                <span className={`${channels.whatsapp ? 'text-white' : 'text-[var(--text-primary)]'}`}>
                                    Whatsapp Entegrasyonu <span className="text-sm opacity-75"><br />(Ek olarak ücretlendirilecektir)</span>
                                </span>
                                {channels.whatsapp && (
                                    <svg className="w-6 h-6 text-white ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                )}
                            </button>

                            {/* Web Sitesi Entegrasyonu (Örnek olarak varsayılan seçili tutuldu) */}
                            <button
                                type="button"
                                onClick={() => handleChannelToggle('website')}
                                className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 ${
                                    channels.website
                                        ? "bg-[var(--accent-primary)] border-[var(--accent-primary)] text-white"
                                        : "bg-[var(--bg-primary)] border-[var(--border-primary)] text-[var(--text-primary)] hover:border-[var(--accent-primary)]"
                                }`}
                            >
                                <span className={`${channels.website ? 'text-white' : 'text-[var(--text-primary)]'}`}>
                                    Web sitesi
                                </span>
                                {channels.website && (
                                    <svg className="w-6 h-6 text-white ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* #2 Aylık Mesaj Sayısı Slider'ı */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 border-b border-[var(--border-primary)] pb-2">
                            Aylık Mesaj Sayısı: <span className="text-[var(--accent-primary)]">{monthlyMessages}</span>
                        </h3>
                        <div className="relative pt-2 pb-8">
                            
                            {/* Değer Etiketleri */}
                            <div className="flex justify-between text-[var(--text-secondary)] text-sm mb-2">
                                {messageOptions.map(option => (
                                    <span key={option} className="w-1/4 text-center">{option}</span>
                                ))}
                            </div>
                            
                            {/* Kaydırma Çubuğu (Range Input) */}
                            <input
                                type="range"
                                min="0"
                                max={messageOptions.length - 1}
                                value={messageOptions.indexOf(monthlyMessages)}
                                onChange={(e) => handleSliderChange(e, (val) => setMonthlyMessages(messageOptions[parseInt(val)]))}
                                className="w-full h-3 appearance-none bg-transparent cursor-pointer"
                                style={{
                                    background: `linear-gradient(to right, var(--accent-primary) 0%, var(--accent-primary) ${messageProgress}%, var(--border-primary) ${messageProgress}%, var(--border-primary) 100%)`,
                                    borderRadius: '9999px' // Yuvarlak kenarlar
                                }}
                            />
                        </div>
                    </div>

                    {/* #3 Temsilci Sayısı Slider'ı */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4 border-b border-[var(--border-primary)] pb-2">
                            Temsilci Sayısı: <span className="text-[var(--accent-primary)]">{agentCount}</span>
                        </h3>
                        <div className="relative pt-2 pb-8">
                            
                            {/* Değer Etiketleri */}
                            <div className="flex justify-between text-[var(--text-secondary)] text-sm mb-2">
                                {agentOptions.map(option => (
                                    <span key={option} className="w-1/4 text-center">{option}</span>
                                ))}
                            </div>

                            {/* Kaydırma Çubuğu (Range Input) */}
                            <input
                                type="range"
                                min="0"
                                max={agentOptions.length - 1}
                                value={agentOptions.indexOf(agentCount)}
                                onChange={(e) => handleSliderChange(e, (val) => setAgentCount(agentOptions[parseInt(val)]))}
                                className="w-full h-3 appearance-none bg-transparent cursor-pointer"
                                style={{
                                    background: `linear-gradient(to right, var(--accent-primary) 0%, var(--accent-primary) ${agentProgress}%, var(--border-primary) ${agentProgress}%, var(--border-primary) 100%)`,
                                    borderRadius: '9999px'
                                }}
                            />
                        </div>
                    </div>

                    {/* Devam Et Butonu */}
                    <div className="flex justify-end mt-8">
                        <button
                            type="submit"
                            className="py-3 px-8 bg-[var(--accent-primary)] text-white font-semibold rounded-lg shadow-md hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition duration-200"
                            onClick={() => onNext && onNext()}
                        >
                            Devam Et
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}