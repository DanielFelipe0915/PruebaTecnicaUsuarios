import { createContext } from "react";
import GetContextValues from "./GetContextValues";
import { ContextProps as Props, ContextValue } from "./types";

export const Context = createContext<ContextValue>({
  theme: "light",
  menu: [],
  setTheme: () => {},
  addMenuItem: () => {},
});

const Provider = ({ children, pageProps }: Props) => {
  const value = GetContextValues({ pageProps });
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
