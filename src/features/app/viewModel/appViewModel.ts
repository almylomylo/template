import {initializeApp} from '@/core/store/app/events';
import {$navIsOpen, setNavIsOpen} from '../store/appStore';
import {useUnit} from 'effector-react';
import menu from '@/core/mockData/menu.json';

export const AppViewModel = () => {
  const navIsOpen = useUnit($navIsOpen);

  const handleNav = (val: boolean) => {
    val ? (document.body.style.overflowY = 'hidden') : (document.body.style.overflowY = 'scroll');
    setNavIsOpen(val);
  };

  const init = () => {
    // initializeApp(menu);
  };

  return {
    init,
    navIsOpen,
    setNavIsOpen,
    handleNav,
  };
};
