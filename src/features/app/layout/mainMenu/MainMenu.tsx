import {AppViewModel} from '@/features/app/viewModel/appViewModel';
import {useRef} from 'react';
import useOnClickOutside from '@/core/hooks/useOnClickOutside';
import $appStore from '@/core/store/app/store';
import {useUnit} from 'effector-react';
import {MenuType, NavItemType} from '@/core/store/app/types';
import {sanitizeUppercase} from '@/core/utils/stringUtils';

import './MainMenu.scss';
export const MainMenu = () => {
  const {navIsOpen, handleNav} = AppViewModel();
  const appStore = useUnit($appStore);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    if (navIsOpen) handleNav(false);
  };

  useOnClickOutside(menuRef, handleClickOutside);

  return (
    <div className={`mainMenu ${navIsOpen ? 'navIsOpen' : ''}`}>
      <div className="container">
        <div className="mainMenu-inner" ref={menuRef}>
          <div className="mainMenu-header fs-14">MENU</div>
          <div className="mainMenu-body">
            <nav>
              {appStore.nav !== null &&
                appStore.nav
                  .filter((e: MenuType) => e.navType === 'menuNav')[0]
                  .children.map((item: NavItemType, i: number) => (
                    <div className="navItem fs-20" key={i}>
                      {sanitizeUppercase(item.navItem)}
                      {item.children && item.children.length > 0 && (
                        <div className="iconArrow">
                          <svg>
                            <use xlinkHref="#icon-arrow" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
