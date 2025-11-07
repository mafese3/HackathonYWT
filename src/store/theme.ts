interface ThemeStore {
  isDark: boolean;
  toggle: () => void;
}

// Store del tema usando localStorage para persistencia
export const themeStore: ThemeStore = {
  isDark: true,
  toggle() {
    this.isDark = !this.isDark;
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('light-theme', !this.isDark);
    }
  }
};