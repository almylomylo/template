import {AppViewModel} from '@/features/app/viewModel/appViewModel';
import './BurgerMenu.scss';

export const BurgerMenu = () => {
  const {navIsOpen, handleNav} = AppViewModel();
  return <div className={`burgerMenu ${navIsOpen ? 'navIsOpen' : ''}`} onClick={() => handleNav(!navIsOpen)}></div>;
};
