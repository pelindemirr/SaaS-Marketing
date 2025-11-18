"use client";

import { useState, useRef } from "react";
// Dosya yolu adını koruyoruz, ancak fonksiyon olarak Step2 içeriğini temsil ettiğini biliyoruz.
import Step1Form from "./componenets/step1Form";
import Step2Form from "./componenets/step2Form"; // Yeni eklenen Step2Form'u kullanacağız
import Step3Form from "./componenets/step3form";

// Adım sayacı için kullanılan sabitler
const TOTAL_STEPS = 3;
const CURRENT_STEP_1 = 1;
const CURRENT_STEP_2 = 2;
const CURRENT_STEP_3 = 3;

export default function CompanyRegister() {
    const [currentStep, setCurrentStep] = useState(0);
    const [applicationType, setApplicationType] = useState<"Bireysel" | "Kurumsal">("Kurumsal");
    const formRef = useRef<HTMLFormElement>(null);

    // İkinci adıma kaydırmak için kullanılan Ref
    const step1Ref = useRef<HTMLDivElement>(null);
    const step2Ref = useRef<HTMLDivElement>(null);
    const step3Ref = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", companyName: "", email: "", slug: "",
        countryCode: "+90", industry: "", ticketsPerMonth: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    /* --- Adım Yönetimi Fonksiyonları --- */

    // 1. Adımdan 2. Adıma geçerken çağrılır
    const handleNextStep = (nextStep: number) => {
        setCurrentStep(nextStep);

        // Kaydırma işlemini bir sonraki animasyon karesinde gerçekleştir
        window.requestAnimationFrame(() => {
            if (step1Ref.current) {
                step1Ref.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    };

    // 2. Adımdan geri dönerken çağrılır
    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    // Kayıt tamamlandığında çağrılır (Hızlı Kayıt veya Final Step)
    const handleRegister = () => {
        // API kayıt mantığı
        alert("Kayıt tamamlandı!");
    };

    // Step 1 İçindeki Kayıt ve Devam Butonlarının Action Fonksiyonu
    const handleAction = (actionType: 'continue' | 'register') => {
        if (formRef.current && !formRef.current.checkValidity()) {
            formRef.current.reportValidity();
            return;
        }

        if (actionType === 'continue') {
            handleNextStep(currentStep + 1);
        } else {
            handleRegister();
        }
    };
    /* --------------------------------- */

    const handleRegisterAndContinue = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (currentStep != 0) return;
        handleAction('continue');
    };

    const handleRegisterOnly = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        handleAction('register');
    };

    const handleApplicationTypeChange = (type: "Bireysel" | "Kurumsal") => {
        setCurrentStep(CURRENT_STEP_1);
        setApplicationType(type);
    };

    const handleFinish = () => {
        handleRegister();
    }

    const progressPercentage = (currentStep / TOTAL_STEPS) * 100;

    // --- Adım 1 İçeriği ---
    const Step0Content = (
        <>
            {/* Başlıklar */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[var(--accent-primary)]">Üyelik Oluşturun</h2>
                <p className="text-[var(--text-secondary)] mt-2">CCPilot'un gücünü keşfedin ve müşteri etkileşiminizi artırın.</p>
            </div>

            {/* Başvuru Tipi Seçimi */}
            <div className="mb-8 p-4 bg-[var(--bg-primary)] border border-[var(--border-primary)] rounded-lg">
                <p className="text-[var(--text-secondary)] mb-3 font-semibold">Başvuru Tipi:</p>
                <div className="flex rounded-lg overflow-hidden border border-[var(--border-primary)]">
                    <button type="button" onClick={() => handleApplicationTypeChange("Bireysel")} className={`flex-1 text-center py-3 px-4 transition-colors duration-200 ${applicationType === "Bireysel" ? "bg-[var(--accent-primary)] text-white font-semibold relative" : "bg-[var(--bg-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"}`}>Bireysel {applicationType === "Bireysel" && (<span className="absolute right-3 top-1/2 transform -translate-y-1/2"><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>)}</button>
                    <button type="button" onClick={() => handleApplicationTypeChange("Kurumsal")} className={`flex-1 text-center py-3 px-4 transition-colors duration-200 relative ${applicationType === "Kurumsal" ? "bg-[var(--accent-primary)] text-white font-semibold" : "bg-[var(--bg-primary)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"}`}>Kurumsal {applicationType === "Kurumsal" && (<span className="absolute right-3 top-1/2 transform -translate-y-1/2"><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span>)}</button>
                </div>
            </div>

            <form ref={formRef} onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                {/* Form Alanları (Kısaltıldı) */}
                <div><label htmlFor="firstName" className="block text-sm font-medium text-[var(--text-secondary)]">Ad*</label><input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Ad" required className="mt-1 block w-full px-4 py-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]" /></div>
                <div><label htmlFor="lastName" className="block text-sm font-medium text-[var(--text-secondary)]">Soyad*</label><input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Soyad" required className="mt-1 block w-full px-4 py-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]" /></div>
                {applicationType === "Kurumsal" && (
                    <div><label htmlFor="companyName" className="block text-sm font-medium text-[var(--text-secondary)]">Şirket Adı*</label><input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Şirket Adı" required className="mt-1 block w-full px-4 py-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]" /></div>
                )}
                <div><label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)]">E-posta*</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-posta" required className="mt-1 block w-full px-4 py-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]" /></div>
                {applicationType === "Kurumsal" && (<>
                    <div><label htmlFor="slug" className="block text-sm font-medium text-[var(--text-secondary)]">Slug (Şirket Adı Kısaltması)*</label><input type="text" id="slug" name="slug" value={formData.slug} onChange={handleChange} placeholder="Şirket Kısaltması" required className="mt-1 block w-full px-4 py-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]" /></div>
                    <div className="md:col-span-1"><label htmlFor="ticketsPerMonth" className="block text-sm font-medium text-[var(--text-secondary)]">Ayda kaç adet destek ve satış bildirimiyle ilgileniyorsunuz?*</label><select id="ticketsPerMonth" name="ticketsPerMonth" value={formData.ticketsPerMonth} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"><option value="">Lütfen Seçiniz</option><option value="0-50">0-50</option><option value="51-200">51-200</option><option value="201-500">201-500</option><option value="500+">500+</option></select></div>
                    <div className="md:col-span-1"><label htmlFor="industry" className="block text-sm font-medium text-[var(--text-secondary)]">Endüstri*</label><input type="text" id="industry" name="industry" value={formData.industry} onChange={handleChange} placeholder="Endüstri" required className="mt-1 block w-full px-4 py-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]" /></div>
                </>)}
                <div><label htmlFor="countryCode" className="block text-sm font-medium text-[var(--text-secondary)]">Ülke Kodu*</label><select id="countryCode" name="countryCode" value={formData.countryCode} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"><option value="+90">Turkey (Türkiye) +90</option><option value="+1">USA +1</option><option value="+44">UK +44</option><option value="+49">Germany +49</option></select></div>

                {/* Submit Butonları - Dinamik Olarak Yönetiliyor */}
                <div className="col-span-full flex flex-col sm:flex-row gap-4">
                    {applicationType === "Bireysel" && (
                        <button type="button" onClick={handleRegisterAndContinue} className="w-full py-3 px-4 bg-[var(--accent-primary)] text-white font-semibold rounded-lg shadow-md hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition duration-200">Kayıt Ol ve Forma Devam Et</button>
                    )}
                    {applicationType === "Kurumsal" && (
                        <>
                            <button type="button" onClick={handleRegisterAndContinue} className="w-full sm:w-1/2 py-3 px-4 bg-[var(--accent-primary)] text-white font-semibold rounded-lg shadow-md hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition duration-200">Kayıt Ol ve Forma Devam Et</button>
                            <button type="button" onClick={handleRegisterOnly} className="w-full sm:w-1/2 py-3 px-4 bg-[var(--bg-primary)] text-[var(--accent-primary)] border border-[var(--accent-primary)] font-semibold rounded-lg shadow-sm hover:bg-[var(--accent-primary)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition duration-200">Kayıt Ol</button>
                        </>
                    )}
                </div>
            </form>
            <p className="mt-4 text-center text-sm text-[var(--text-secondary)]">
                Hesabınız var mı?{" "}
                <a href="/login" className="text-[var(--accent-primary)] hover:underline">Giriş Yapın</a>
            </p>
        </>
    );

    // --- Bileşen Render Kısmı ---
    return (
        <div className="min-h-screen flex flex-col justify-start bg-[var(--bg-primary)]/80 px-4 py-8 overflow-y-auto">

            {/* Adım 1 İçeriği */}
            <div className={`w-full max-w-3xl mx-auto border border-[var(--border-primary)] bg-[var(--bg-secondary)] rounded-xl shadow-2xl p-8 mb-8`}>
                {Step0Content}
            </div>

            {/* Adım 2 İçeriği (Yeni açılan form) */}
            <div
                ref={step1Ref}
                className={`w-full max-w-3xl p-0 mx-auto rounded transition-opacity duration-300 ease-in scroll-mt-10 mt-20
                    ${currentStep === CURRENT_STEP_1 ? 'opacity-100' : 'opacity-0 h-0 p-0 overflow-hidden'}`}
            >
                {/* 2. Adım içeriğini render ederken, geri gitme aksiyonu için prop'u geçiyoruz. */}
                <Step1Form onNext={() => handleNextStep(2)} />
            </div>

            {/* Adım 2 İçeriği (Yeni açılan form) */}
            <div
                ref={step2Ref}
                className={`w-full max-w-3xl p-0 mx-auto rounded transition-opacity duration-300 ease-in scroll-mt-10 mt-20
                    ${currentStep === CURRENT_STEP_2 ? 'opacity-100' : 'opacity-0 h-0 p-0 overflow-hidden'}`}
            >
                {/* 2. Adım içeriğini render ederken, geri gitme aksiyonu için prop'u geçiyoruz. */}
                <Step2Form onBack={handlePrevStep} onNext={() => handleNextStep(3)} />
            </div>

            <div
                ref={step3Ref}
                className={`w-full max-w-3xl p-0 mx-auto rounded transition-opacity duration-300 ease-in scroll-mt-10 mt-20
                    ${currentStep === CURRENT_STEP_3 ? 'opacity-100' : 'opacity-0 h-0 p-0 overflow-hidden'}`}
            >
                <Step3Form onBack={handlePrevStep} onNext={() => handleFinish()} />
            </div>
        </div>
    );
}