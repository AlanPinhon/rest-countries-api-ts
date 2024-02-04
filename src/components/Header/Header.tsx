import { useEffect, useState } from 'react';
import Moon from '../../assets/images/moon.svg';
import Sun from '../../assets/images/sun.svg';
import './HeaderStyles.css';

export const Header = () => {
  //Get system color preference
  const prefersDarkThemeMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  //Set initial theme based on system preference or local storage
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || (prefersDarkThemeMode ? 'dark' : 'light'));
  document.querySelector('body')?.setAttribute('data-theme', theme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.querySelector('body')?.toggleAttribute('data-theme');
    localStorage.setItem('theme', newTheme);
  };
  
  //Listen for changes to the system color preference
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      setTheme(query.matches ? 'dark' : 'light');
      document.querySelector('body')?.setAttribute('data-theme', theme);
    };

    query.addEventListener('change', handleChange);

    return () => {
      query.removeEventListener('change', handleChange);
    };
  }, [theme])
  
  return (
    <header>
      <h1 className="header-title">Where in the world?</h1>
      <button onClick={toggleTheme} id='dark-mode-toggle' className="theme-mode-btn">
        <img src={(theme === 'light') ? Moon : Sun} className="icon" alt="toggle-icon"/>
        <p className="theme-mode-text">
          {(theme === 'light') ? 'Dark' : 'Light'} Mode
        </p>
      </button>
    </header>
  )
}