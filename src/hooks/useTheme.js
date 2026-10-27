import { useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#17191d' : '#fafafa');
    try {
      localStorage.setItem('portfolio-theme', theme);
    } catch {
      /* The toggle still works when storage is unavailable. */
    }
  }, [theme]);
  return {
    theme,
    toggleTheme: () =>
      setTheme((current) => (current === 'light' ? 'dark' : 'light')),
  };
}
