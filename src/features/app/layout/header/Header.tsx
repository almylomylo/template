import {MainMenu} from '../mainMenu/MainMenu';
import {BurgerMenu} from './components/BurgerMenu';
import {HeaderIcons} from './components/HeaderIcons';
import {HeaderNav} from './components/HeaderNav';
import {Logo} from './components/Logo';
import {TopNav} from './components/TopNav';

import './Header.scss';
export const Header = () => {
  return (
    <header className="header">
      <TopNav />
      <div className="header-inner">
        <div className="container">
          <div className="header-left">
            <BurgerMenu />
            <Logo />
          </div>
          <div className="header-center">
            <HeaderNav />
          </div>
          <div className="header-right">
            <HeaderIcons />
          </div>
        </div>
      </div>
    </header>
  );
};
