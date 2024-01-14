import { Link } from 'react-router-dom';
import Moon from '../../assets/images/moon.svg';
import './HeaderStyles.css';

export const Header = () => (
  <header>
    <Link to={"/home"} className="header-title">Where in the world?</Link>
      <div className="icon-mode">
        <img src={Moon} className="icon"/>
        <p className="theme-mode-text">Light Mode</p>
      </div>
  </header>
)