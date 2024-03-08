import {
  MainMenuItemType,
  FooterItemType,
} from "@/features/app/model/appModels";
import { AppDomain } from "./domain";
import { MenuType } from "./types";
export const setError = AppDomain.createEvent<string>();

export const initializeApp = AppDomain.createEvent<MenuType[]>();

export const setMainMenu = AppDomain.createEvent<MainMenuItemType[]>();
export const setActiveNav = AppDomain.createEvent<number | null>();
export const setFooterAbout = AppDomain.createEvent<FooterItemType[]>();
export const setFooterHelp = AppDomain.createEvent<FooterItemType[]>();
