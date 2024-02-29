export interface AppState {
  nav: MenuType[] | null;
  error?: string | null;
}

export interface MenuType {
  navType: string;
  children: NavItemType[];
}

export interface NavItemType {
  navItem: string;
  children?: NavItemType[];
}
