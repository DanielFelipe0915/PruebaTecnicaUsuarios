import { useState } from "react";
import {
  ContextValue,
  ContextValuesProps as Props,
  MenuItem,
  ThemeSelection,
} from "./types";

const GetContextValues = ({ }: Props): ContextValue => {
  //Estados compartidos...
  const [theme, setTheme] = useState<ThemeSelection>("light");
  const [menu, setMenu] = useState<Array<MenuItem>>([]);

  //Objeto de accesso...
  const value: ContextValue = {
    theme,
    menu,
    setTheme,
    addMenuItem: (newItem: MenuItem) => {
      setMenu([...menu, newItem]);
    },
  };
  return value;
};

export default GetContextValues;
