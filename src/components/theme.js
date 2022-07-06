import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#ffffff",
      main: "#ffffff",
      light: "#7c88cc",
      contrastText: "#fff",
    },
    secondary: {
      light: "#9bc0ff",
      main: "#82b1ff",
      dark: "#5b7bb2",
      contrastText: "#000",
    },
  },
});

export default theme;