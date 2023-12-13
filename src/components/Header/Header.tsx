import Moon from '../../assets/images/moon.svg';
import './HeaderStyles.css';

export const Header = () => (
  <header>
    <h1 className="header-title">Where in the world?</h1>
      <div className="icon-mode">
        <img src={Moon} className="icon"/>
        <p className="theme-mode-text">Light Mode</p>
      </div>
  </header>
)