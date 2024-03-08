import {
  MainMenuItemType,
  FooterItemType,
} from "@/features/app/model/appModels";

export interface AppState {
  mainMenu: MainMenuItemType[] | null;
  error?: string | null;
  activeNav: number | null;
  footerAbout: FooterItemType[] | null;
  footerHelp: FooterItemType[] | null;
}

export interface MenuType {
  navType: string;
  children: NavItemType[];
}

export interface NavItemType {
  navItem: string;
  children?: NavItemType[];
}
