import {Outlet} from 'react-router-dom';
import {Header} from './header/Header';
import {Footer} from './footer/Footer';
import {MainMenu} from './mainMenu/MainMenu';
import './Layout.scss';

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MainMenu />
    </div>
  );
};
