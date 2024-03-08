export type MainMenuType = {
  mainMenu: MainMenuItemType[];
};
export type MainMenuItemType = {
  title: string;
  entity_type?: string;
  entity_id: number;
  cleanUrl: string;
  external: boolean;
  relative: string;
  menuImage?: string;
  menuItemChildren?: string[];
  submenu: MainMenuItemType[];
};

export type FooterItemType = {
  title: string;
  entity_type?: string;
  entity_id: number;
  cleanUrl: string;
  external: boolean;
  relative: string;
  menuImage: string;
};
