"use client";

import React, { useState } from 'react';

const CURRENT_STEP = 4;
const TOTAL_STEPS = 4;

export default function MeetingPage({ onFinish }: { onFinish?: () => void }) {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); 
    // YENİ STATE: Kayıt işleminin tamamlandığını ve kalıcı mesajın gösterileceğini belirtir.
    const [isRegistrationFinalized, setIsRegistrationFinalized] = useState(false); 
    
    const [selectedDateTime, setSelectedDateTime] = useState('');

    const progressPercentage = (CURRENT_STEP / TOTAL_STEPS) * 100;

    const handleScheduleMeetingClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    
    const handleCloseSuccessModal = () => {
        setIsSuccessModalOpen(false);
        // ÖNEMLİ: Modal kapandıktan sonra kalıcı başarı durumunu ayarla.
        setIsRegistrationFinalized(true); 
        // if (onFinish) { onFinish(); } 
    };

    const handleConfirmAppointment = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!selectedDateTime) {
            alert("Lütfen bir tarih ve saat seçin.");
            return;
        }
        
        console.log(`Randevu tarihi seçildi: ${selectedDateTime}`);
        
        handleCloseModal();
        // Başarı pop-up'ını aç
        setIsSuccessModalOpen(true); 
    };
    
    const today = new Date().toISOString().slice(0, 16); 

    // --- Randevu Oluşturma Modal İçeriği (Değişmedi) ---
    const MeetingModal = () => (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-opacity duration-300">
            <div className="bg-[var(--bg-secondary)] w-full max-w-lg p-8 rounded-xl shadow-2xl relative transform transition-transform duration-300 scale-100">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6 border-b border-[var(--border-primary)] pb-3">
                    Randevu Tarihi Seçin
                </h2>
                <form onSubmit={handleConfirmAppointment}>
                    <div className="mb-6">
                        <label htmlFor="appointment-datetime" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                            Görüşme için uygun tarih ve saat:
                        </label>
                        <input
                            type="datetime-local"
                            id="appointment-datetime"
                            name="appointment-datetime"
                            value={selectedDateTime}
                            onChange={(e) => setSelectedDateTime(e.target.value)}
                            min={today}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] appearance-none"
                        />
                        <p className="text-xs text-[var(--text-secondary)] mt-2">
                            (Görüşmelerimiz 15 dakika sürmektedir.)
                        </p>
                    </div>
                    <div className="flex justify-end space-x-4 pt-2 border-t border-[var(--border-primary)]">
                        <button type="button" onClick={handleCloseModal} className="py-2 px-4 text-[var(--text-secondary)] font-semibold rounded-lg hover:text-[var(--accent-primary)] transition duration-200">Kapat</button>
                        <button type="submit" className="py-2 px-4 bg-[var(--accent-primary)] text-white font-semibold rounded-lg shadow-md hover:bg-[var(--accent-hover)] transition duration-200">Randevuyu Onayla</button>
                    </div>
                </form>
            </div>
        </div>
    );

    // --- Başarı Modal İçeriği (Değişmedi) ---
    const SuccessModal = () => (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 transition-opacity duration-300">
            <div className="bg-[var(--bg-secondary)] w-full max-w-lg p-8 rounded-xl shadow-2xl relative transform transition-transform duration-300 scale-100 text-center">
                <h2 className="text-3xl font-bold text-[var(--accent-primary)] mb-4">Onayınız Gerekiyor!</h2>
                <p className="text-xl text-[var(--text-primary)] mb-6">Randevunuz başarıyla kaydedildi.</p>
                <div className="p-4 bg-[var(--bg-primary)] rounded-lg border border-[var(--border-primary)] mb-6">
                    <p className="text-lg font-semibold text-red-400 mb-2">Lütfen Mail Kutunuzu Kontrol Edin</p>
                    <p className="text-[var(--text-secondary)]">Hesabınızın **tam aktivasyonu** ve randevu onayınız için size gönderdiğimiz e-postadaki linke tıklamanız gerekmektedir.</p>
                </div>
                <button type="button" onClick={handleCloseSuccessModal} className="py-2 px-8 bg-[var(--accent-primary)] text-white font-semibold rounded-lg shadow-md hover:bg-[var(--accent-hover)] transition duration-200">Tamam</button>
            </div>
        </div>
    );
    
    // --- YENİ: Kalıcı Başarı Sonrası Ana Sayfa İçeriği ---
    const FinalizedContent = (
        <div className="flex flex-col items-center justify-center text-center flex-grow p-4 min-h-[400px]">
             <h1 className="text-4xl font-extrabold text-green-500 mb-4">
                📬 Gelen Maili Onaylayın
            </h1>
            <p className="text-xl text-[var(--text-primary)] mb-6 max-w-md">
                Hesabınızın **tam aktivasyonu** ve randevu onayınız için size gönderdiğimiz e-postadaki linke tıklamanız gerekmektedir.
            </p>
            <a
                href="/login"
                className="mt-6 py-3 px-10 text-lg bg-[var(--accent-primary)] text-white font-bold rounded-lg shadow-xl hover:bg-[var(--accent-hover)] transition duration-200 focus:outline-none focus:ring-4 focus:ring-[var(--accent-primary)]/50"
            >
                Giriş Sayfasına Git
            </a>
        </div>
    );

    // --- Başlangıç/Randevu İçeriği ---
    const InitialContent = (
        <div className="flex flex-col items-center justify-center text-center flex-grow p-4">
            <h1 className="text-4xl font-extrabold text-[var(--accent-primary)] mb-4">
                🎉 Kaydı Tamamlamak İçin Randevu Oluşturun
            </h1>
            <p className="text-xl text-[var(--text-primary)] mb-6 max-w-md">
                CCPilot uzmanlarımızla 15 dakikalık bir görüşme ayarlayarak, hesabınızı ve seçtiğiniz tüm özellikleri aktive edin.
            </p>
            
            <button
                onClick={handleScheduleMeetingClick}
                className="mt-6 py-3 px-10 text-lg bg-[var(--accent-primary)] text-white font-bold rounded-lg shadow-xl hover:bg-[var(--accent-hover)] transition duration-200 focus:outline-none focus:ring-4 focus:ring-[var(--accent-primary)]/50"
            >
                Randevu Oluştur
            </button>
        </div>
    );

    /* --- Ana Bileşen Render Kısmı --- */
    return (
        <div className="w-full min-h-[500px] flex flex-col justify-between mt-10">
            
            {/* --- Adım Sayacı (Yalnızca Finalize Edilmediğinde Gösterilir) --- */}
            {!isRegistrationFinalized && (
                <div className="mb-8 max-w-7xl mx-auto min-w-[300px] w-full px-4">
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
            )}

            {/* --- İçerik Değişimi --- */}
            {isRegistrationFinalized ? FinalizedContent : InitialContent}

            {/* --- Alt Kısım / Giriş Linki --- */}
            <div className="mt-auto pt-4 border-t border-[var(--border-primary)] text-center">
                <p className="text-sm text-[var(--text-secondary)]">
                    Hesabınız var mı?{" "}
                    <a
                        href="/login"
                        className="text-[var(--accent-primary)] hover:underline font-medium"
                    >
                        Giriş Yapın
                    </a>
                </p>
            </div>

            {/* Koşullu olarak Modalları render et */}
            {isModalOpen && <MeetingModal />}
            {isSuccessModalOpen && <SuccessModal />}
        </div>
    );
}