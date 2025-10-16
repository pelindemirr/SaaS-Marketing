"use client";

import { useState } from "react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4"
            style={{
                backgroundColor: "var(--bg-primary)",
                color: "var(--text-primary)",
            }}
        >
            <div
                className="w-full max-w-md rounded-2xl shadow-lg p-8 transition-all duration-300"
                style={{
                    border: "1px solid var(--border-primary)",
                }}
            >
                {/* Başlık */}
                <div className="flex flex-col items-center mb-6">
                    <div
                        className="w-14 h-14 flex items-center justify-center rounded-full mb-3"
                        style={{
                            backgroundColor: "var(--accent-primary)",
                            color: "#fff",
                        }}
                    >
                        {/* Kilit İkonu */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 11V7a4 4 0 10-8 0v4M5 11h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z"
                            />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-semibold mb-1">Hoş Geldiniz</h1>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Lütfen hesabınıza giriş yapın
                    </p>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-5">
                    {/* E-posta */}
                    <div>
                        <label className="text-sm font-medium">E-posta</label>
                        <input
                            type="email"
                            placeholder="ornek@mail.com"
                            className="w-full mt-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all"
                            style={{
                                backgroundColor: "var(--bg-secondary)",
                                color: "var(--text-primary)",
                                border: "1px solid var(--border-primary)",
                                outline: "none",
                            }}
                            onFocus={(e) =>
                                (e.target.style.borderColor = "var(--accent-primary)")
                            }
                            onBlur={(e) =>
                                (e.target.style.borderColor = "var(--border-primary)")
                            }
                        />
                    </div>

                    {/* Şifre */}
                    <div>
                        <label className="text-sm font-medium">Şifre</label>
                        <div className="relative mt-1">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg pr-10 focus:outline-none focus:ring-2 transition-all"
                                style={{
                                    backgroundColor: "var(--bg-secondary)",
                                    color: "var(--text-primary)",
                                    border: "1px solid var(--border-primary)",
                                    outline: "none",
                                }}
                                onFocus={(e) =>
                                    (e.target.style.borderColor = "var(--accent-primary)")
                                }
                                onBlur={(e) =>
                                    (e.target.style.borderColor = "var(--border-primary)")
                                }
                            />
                            {/* Göz ikonu */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                {showPassword ? (
                                    /* Göz kapalı (eye-off) */
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="cursor-pointer"
                                    >
                                        {/* Eye outline */}
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5
         c4.477 0 8.268 2.943 9.542 7
         -1.274 4.057-5.065 7-9.542 7
         -4.477 0-8.268-2.943-9.542-7z"
                                        />
                                        {/* Pupil */}
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        {/* Diagonal slash */}
                                        <line
                                            x1="3"
                                            y1="3"
                                            x2="21"
                                            y2="21"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                ) : (
                                    /* Göz açık (eye) - mevcut kullandığın svg ile uyumlu */
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="cursor-pointer"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5
         c4.477 0 8.268 2.943 9.542 7
         -1.274 4.057-5.065 7-9.542 7
         -4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                )}


                            </button>
                        </div>
                    </div>

                    {/* Giriş Butonu */}
                    <button
                        type="submit"
                        className="mt-2 py-3 rounded-lg font-medium transition-all duration-200 hover:opacity-90 cursor-pointer"
                        style={{
                            backgroundColor: "var(--accent-primary)",
                            color: "#fff",
                        }}
                    >
                        Giriş Yap
                    </button>
{/*
                    <div className="text-center">
                        <a
                            href="#"
                            className="text-sm hover:underline"
                            style={{
                                color: "var(--accent-primary)",
                            }}
                        >
                            Şifreni mi unuttun?
                        </a>
                    </div>
*/}
                </form>
            </div>
        </div>
    );
}
