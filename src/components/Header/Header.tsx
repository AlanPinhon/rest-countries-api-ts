import { useState } from 'react';
import Moon from '../../assets/images/moon.svg';
import './HeaderStyles.css';

export const Header = () => {

  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'light');
  document.querySelector('body')?.setAttribute('data-theme', theme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.querySelector('body')?.toggleAttribute('data-theme');
    localStorage.setItem('theme', newTheme);
  };
  
  return (
    <header>
      <h1 className="header-title">Where in the world?</h1>
      <button onClick={toggleTheme} id='dark-mode-toggle' className="theme-mode-btn">
        <img src={Moon} className="icon"/>
        <p className="theme-mode-text">Dark Mode</p>
      </button>
    </header>
  )
}