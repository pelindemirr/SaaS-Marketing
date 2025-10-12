export const colorPalette = {
  dark: {
    background: {
      primary: '#1A1D21',    // Ana arka plan
      secondary: '#22262B',   // İkincil arka plan
      card: '#22313F',        // Kart arka planı
    },
    text: {
      primary: '#E4E6EB',     // Birincil metin
      secondary: '#B0B3B8',   // İkincil metin
    },
    accent: {
      primary: '#2196F3',     // Vurgu rengi
      hover: '#2196F3',       // Hover rengi
    },
    border: {
      primary: '#2E333A',     // Çizgi/Ayırım
    },
    status: {
      success: '#4CAF50',     // Başarı
      warning: '#FFC107',     // Uyarı
      error: '#F44336',       // Problem/Hata
    }
  },
  light: {
    background: {
      primary: '#FAFAFA',     // Ana arka plan
      secondary: '#ECEFF1',   // İkincil arka plan
      card: '#E0E3E7',        // Kart arka planı
    },
    text: {
      primary: '#1A1D21',     // Birincil metin
      secondary: '#4A4F55',   // İkincil metin
    },
    accent: {
      primary: '#2196F3',     // Vurgu rengi
      hover: '#42A5F5',       // Hover rengi
    },
    border: {
      primary: '#D0D3D8',     // Çizgi/Ayırım
    },
    status: {
      success: '#4CAF50',     // Başarı
      warning: '#FFC107',     // Uyarı
      error: '#F44336',       // Problem/Hata
    }
  }
} as const;

// CSS değişkenleri için type
export type ThemeMode = 'light' | 'dark';

// Tema utility fonksiyonları
export const getThemeColors = (mode: ThemeMode) => {
  return colorPalette[mode];
};

// CSS custom properties için renk değişkenleri
export const getCSSVariables = (mode: ThemeMode) => {
  const colors = colorPalette[mode];
  return {
    '--bg-primary': colors.background.primary,
    '--bg-secondary': colors.background.secondary,
    '--bg-card': colors.background.card,
    '--text-primary': colors.text.primary,
    '--text-secondary': colors.text.secondary,
    '--accent-primary': colors.accent.primary,
    '--accent-hover': colors.accent.hover,
    '--border-primary': colors.border.primary,
    '--status-success': colors.status.success,
    '--status-warning': colors.status.warning,
    '--status-error': colors.status.error,
  };
};