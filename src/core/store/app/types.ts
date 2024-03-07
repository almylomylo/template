import {MainMenuItemType} from '@/features/app/model/appModels';

export interface AppState {
  mainMenu: MainMenuItemType[] | null;
  error?: string | null;
  activeNav: number | null;
}

export interface MenuType {
  navType: string;
  children: NavItemType[];
}

export interface NavItemType {
  navItem: string;
  children?: NavItemType[];
}
