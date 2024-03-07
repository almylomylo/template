import {AppViewModel} from '@/features/app/viewModel/appViewModel';
import {useRef} from 'react';
import useOnClickOutside from '@/core/hooks/useOnClickOutside';

import './MainMenu.scss';
export const MainMenu = () => {
  const {navIsOpen, handleNav} = AppViewModel();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    if (navIsOpen) handleNav(false);
  };

  useOnClickOutside(menuRef, handleClickOutside);

  return (
    <div className={`mainMenu ${navIsOpen ? 'navIsOpen' : ''}`}>
      <div className="mainMenu-inner" ref={menuRef}>
        <div className="mainMenu-header fs-14">
          MENU
          <div className="mainMenu-close" onClick={() => handleNav(!navIsOpen)}></div>
        </div>
        <div className="mainMenu-body"></div>
      </div>
    </div>
  );
};
