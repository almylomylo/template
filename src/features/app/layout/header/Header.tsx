import {useEffect, useRef, useState} from 'react';
import $appStore from '@/core/store/app/store';
import {BurgerMenu} from './components/BurgerMenu';
import {HeaderIcons} from './components/HeaderIcons';
import {HeaderNav} from './components/HeaderNav';
import {Logo} from './components/Logo';
import {TopNav} from './components/TopNav';
import {useUnit} from 'effector-react';

import Image from '@/core/components/image/Image';

import {MainMenuItemType} from '../../model/appModels';

import './Header.scss';
import useOnClickOutside from '@/core/hooks/useOnClickOutside';
import {setActiveNav} from '@/core/store/app/events';

export const Header = () => {
  const appStore = useUnit($appStore);
  const [activeNavItem, setActiveNavItem] = useState<MainMenuItemType | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    if (appStore.activeNav) setActiveNav(null);
  };

  useOnClickOutside(menuRef, handleClickOutside);

  useEffect(() => {
    if (appStore.mainMenu && appStore.activeNav) {
      const menuItem = appStore.mainMenu.filter((e: MainMenuItemType) => e.entity_id === appStore.activeNav);
      if (menuItem && menuItem.length > 0) {
        setActiveNavItem(menuItem[0]);
      }
    } else {
      setActiveNavItem(null);
    }
  }, [appStore.activeNav, appStore.mainMenu]);

  return (
    <>
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
      <div className={`submenu ${activeNavItem ? 'isOpen' : 'isHidden'}`} ref={menuRef}>
        <div className="submenu-inner">
          <div className="submenu-items">
            {activeNavItem && activeNavItem.submenu.map((item: MainMenuItemType) => <div>{item.title}</div>)}
            {activeNavItem && activeNavItem.menuImage && (
              <div className="submenu-image">
                <Image src={activeNavItem.menuImage} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
