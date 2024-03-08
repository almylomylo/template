import { useCallback, useEffect, useState } from "react";
import { $navIsOpen, setNavIsOpen } from "../store/appStore";
import { useUnit } from "effector-react";
import { MainMenuItemType, FooterItemType } from "../model/appModels";
import AppService from "../service/appService";
import {
  setFooterAbout,
  setMainMenu,
  setFooterHelp,
} from "@/core/store/app/events";

export const AppViewModel = () => {
  const navIsOpen = useUnit($navIsOpen);
  const [menuData, setMenuData] = useState<MainMenuItemType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    getMainMenu();
    getFooterAbout();
    getFooterHelp();
  }, []);

  const getMainMenu = useCallback(async () => {
    setIsLoading(true);
    const menuList = await AppService.getMainMenu();
    if (menuList) {
      setMainMenu(menuList);

      setIsLoading(false);
    }
  }, []);

  const getFooterAbout = useCallback(async () => {
    setIsLoading(true);
    const footerAboutList = await AppService.getFooterAbout();
    if (footerAboutList) {
      setFooterAbout(footerAboutList);

      setIsLoading(false);
    }
  }, []);

  const getFooterHelp = useCallback(async () => {
    setIsLoading(true);
    const footerHelpList = await AppService.getFooterHelp();
    if (footerHelpList) {
      setFooterHelp(footerHelpList);

      setIsLoading(false);
    }
  }, []);
  const handleNav = (val: boolean) => {
    val
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
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
