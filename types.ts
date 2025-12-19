
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export type AppRoute = 
  | '#/' 
  | '#/unternehmen' 
  | '#/talent' 
  | '#/services' 
  | '#/impressum' 
  | '#/zahlungsinformationen' 
  | '#/app' 
  | '#/faq' 
  | '#/datenschutz' 
  | '#/agb';

export interface NavItem {
  label: string;
  href: AppRoute | string;
  isDropdown?: boolean;
}

export interface ServiceStats {
  value: string;
  label: string;
}

export interface MousePosition {
  x: number;
  y: number;
}
