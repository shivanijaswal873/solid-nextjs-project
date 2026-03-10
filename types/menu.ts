export interface SubMenu {
  title: string;
  path: string;
}

export interface Menu {
  title: string;
  path?: string;
  submenu?: SubMenu[];
}