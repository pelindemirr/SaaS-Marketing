// app/company-register/page.tsx
"use client";

import { useState } from "react";

export default function CompanyRegister() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        companySize: "",
        countryCode: "+90",
        industry: "",
        ticketsPerMonth: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Kayıt verisi:", formData);
        alert("Kayıt başarıyla gönderildi!");
        // Burada API isteği veya yönlendirme yapılabilir
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] px-4 py-8">
            <div className="w-full max-w-3xl border border-[var(--border-primary)] rounded-xl shadow-lg p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[var(--accent-primary)]">
                        Üyelik Oluşturun
                    </h2>
                    <p className="text-[var(--text-secondary)] mt-2">
                        CCPilot'un gücünü keşfedin ve müşteri etkileşiminizi artırın.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end"
                >
                    {/* Ad */}
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-[var(--text-secondary)]"
                        >
                            Ad*
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="Ad"
                            required
                            className="mt-1 block w-full px-4 py-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                        />
                    </div>

                    {/* Soyad */}
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-[var(--text-secondary)]"
                        >
                            Soyad*
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Soyad"
                            required
                            className="mt-1 block w-full px-4 py-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                        />
                    </div>

                    {/* Şirket Adı */}
                    <div>
                        <label
                            htmlFor="companyName"
                            className="block text-sm font-medium text-[var(--text-secondary)]"
                        >
                            Şirket Adı*
                        </label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Şirket Adı"
                            required
                            className="mt-1 block w-full px-4 py-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                        />
                    </div>

                    {/* E-posta */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-[var(--text-secondary)]"
                        >
                            E-posta*
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="E-posta"
                            required
                            className="mt-1 block w-full px-4 py-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                        />
                    </div>

                    {/* Şirket Kapasitesi */}
                    <div>
                        <label
                            htmlFor="companySize"
                            className="block text-sm font-medium text-[var(--text-secondary)]"
                        >
                            Şirket Kapasitesi (Toplam Çalışan sayısı)*
                        </label>
                        <input
                            type="number"
                            id="companySize"
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleChange}
                            placeholder="Şirket Kapasitesi (Toplam Çalışan sayısı)"
                            min={1}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                        />
                    </div>

                    {/* Ülke Kodu */}
                    <div>
                        <label
                            htmlFor="countryCode"
                            className="block text-sm font-medium text-[var(--text-secondary)]"
                        >
                            Ülke Kodu*
                        </label>
                        <select
                            id="countryCode"
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                        >
                            <option value="+90">Turkey (Türkiye) +90</option>
                            <option value="+1">USA +1</option>
                            <option value="+44">UK +44</option>
                            <option value="+49">Germany +49</option>
                        </select>
                    </div>

                    {/* Endüstri */}
                    <div className="md:col-span-1">
                        <label
                            htmlFor="industry"
                            className="block text-sm font-medium text-[var(--text-secondary)]"
                        >
                            Endüstri*
                        </label>
                        <input
                            type="text"
                            id="industry"
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            placeholder="Endüstri"
                            required
                            className="mt-1 block w-full px-4 py-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                        />
                    </div>

                    {/* Ayda Kaç Ticket */}
                    <div className="md:col-span-1">
                        <label
                            htmlFor="ticketsPerMonth"
                            className="block text-sm font-medium text-[var(--text-secondary)]"
                        >
                            Ayda kaç adet destek ve satış bildirimiyle ilgileniyorsunuz?*
                        </label>
                        <select
                            id="ticketsPerMonth"
                            name="ticketsPerMonth"
                            value={formData.ticketsPerMonth}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-3 border border-[var(--border-primary)] rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                        >
                            <option value="">Please Select</option>
                            <option value="0-50">0-50</option>
                            <option value="51-200">51-200</option>
                            <option value="201-500">201-500</option>
                            <option value="500+">500+</option>
                        </select>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full col-span-full py-3 px-4 bg-[var(--accent-primary)] text-white font-semibold rounded-lg shadow-md hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                    >
                        Ücretsiz Denemeye Başla
                    </button>
                </form>


                <p className="mt-4 text-center text-sm text-[var(--text-secondary)]">
                    Hesabınız var mı?{" "}
                    <a
                        href="/login"
                        className="text-[var(--accent-primary)] hover:underline"
                    >
                        Giriş Yapın
                    </a>
                </p>
            </div>
        </div>
    );
}
