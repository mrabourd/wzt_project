import { useEffect, useState } from "react";

export const changeMode = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('theme');
        return savedMode === 'dark';
    });

  useEffect(() => {
      const root = window.document.documentElement;
      if (darkMode) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }, [darkMode]);

  return [darkMode, setDarkMode] as const;
}