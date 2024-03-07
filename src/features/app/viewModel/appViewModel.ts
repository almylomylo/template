import {useCallback, useEffect, useState} from 'react';
import {$navIsOpen, setNavIsOpen} from '../store/appStore';
import {useUnit} from 'effector-react';
import {MainMenuItemType, MainMenuType} from '../model/appModels';
import AppService from '../service/appService';
import {setMainMenu} from '@/core/store/app/events';

export const AppViewModel = () => {
  const navIsOpen = useUnit($navIsOpen);
  const [menuData, setMenuData] = useState<MainMenuItemType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    getMainMenu();
  }, []);

  const getMainMenu = useCallback(async () => {
    setIsLoading(true);
    const menuList = await AppService.getMainMenu();
    if (menuList) {
      setMainMenu(menuList);

      setIsLoading(false);
    }
  }, []);
  const handleNav = (val: boolean) => {
    val ? (document.body.style.overflowY = 'hidden') : (document.body.style.overflowY = 'auto');
    setNavIsOpen(val);
  };

  return {
    handleNav,
    navIsOpen,
    setNavIsOpen,
    menuData,
    isLoading,
  };
};
