import {$navIsOpen, setNavIsOpen} from '../store/appStore';
import {useUnit} from 'effector-react';

export const AppViewModel = () => {
  const navIsOpen = useUnit($navIsOpen);

  const handleNav = (val: boolean) => {
    val ? (document.body.style.overflowY = 'hidden') : (document.body.style.overflowY = 'auto');
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
