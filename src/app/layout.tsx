import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "CCPilot - Müşteri İletişim Platformu",
  description: "CCPilot ile tüm iletişim kanallarınızı tek platformda yönetin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  function getTheme() {
                    if (typeof localStorage !== 'undefined') {
                      const savedTheme = localStorage.getItem('theme');
                      if (savedTheme === 'dark' || savedTheme === 'light') {
                        return savedTheme;
                      }
                    }
                    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  
                  const theme = getTheme();
                  const root = document.documentElement;
                  
                  // Sınıfları temizle ve yeni temayı uygula
                  root.className = theme;
                  
                  // CSS custom properties'i hemen uygula
                  const styles = theme === 'dark' ? {
                    '--bg-primary': '#1A1D21',
                    '--text-primary': '#E4E6EB',
                    '--bg-secondary': '#22262B',
                    '--bg-card': '#22313F',
                    '--text-secondary': '#B0B3B8',
                    '--accent-primary': '#2196F3',
                    '--accent-hover': '#2196F3',
                    '--border-primary': '#2E333A'
                  } : {
                    '--bg-primary': '#FAFAFA',
                    '--text-primary': '#1A1D21',
                    '--bg-secondary': '#ECEFF1',
                    '--bg-card': '#E0E3E7',
                    '--text-secondary': '#4A4F55',
                    '--accent-primary': '#2196F3',
                    '--accent-hover': '#42A5F5',
                    '--border-primary': '#D0D3D8'
                  };
                  
                  Object.entries(styles).forEach(([property, value]) => {
                    root.style.setProperty(property, value);
                  });
                  
                } catch (e) {
                  // Hata durumunda varsayılan dark theme
                  document.documentElement.className = 'dark';
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
