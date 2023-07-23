import { createTheme } from "@mui/material";

/* Create a theme instance.
 * DOCS: https://mui.com/material-ui/customization/default-theme/#main-content
 */
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff149d",
    },
    secondary: {
      main: "#22FF14",
    },
    //Add your custom props...
    customColor: {
      700: "#63033b",
    },
    custonButtonColor: {
      main: "#B008FF",
      contrastText: "#FFFFFF",
    },
  },
});

export default theme;
