export interface ContextValuesProps {
  pageProps: any;
}

export interface ContextProps {
  children: any;
  pageProps: any;
}

export interface StateFunction<T> {
  (obj: T): void;
}

export type ThemeSelection = "light" | "dark";

export interface ContextValue {
  theme: ThemeSelection;
  setTheme: StateFunction<ThemeSelection>;
  menu: Array<MenuItem>;
  addMenuItem: StateFunction<MenuItem>;
}

export interface MenuItem {
  id: string;
  title: string;
  url: string;
  father?: string;
  icon?: string | null;
}
