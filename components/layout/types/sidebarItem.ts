export interface sidebarItem {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  getURL?: boolean;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: sidebarItem[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}
