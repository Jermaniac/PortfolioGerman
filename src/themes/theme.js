import { blue, grey } from "@mui/material/colors";

import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  typography: {
    fontFamily: ["'Poppins'", "sans-serif"].join(","),
  },
  palette: {
    background: {
      default: grey[900],
    },
    primary: {
      main: blue[800],
    },
    secondary: {
      main: blue[500],
    },
    terciary: {
      main: blue[50],
    },
    text: {
      primary: blue[50],
      secondary: blue[500],
      terciary: grey[900]
    },
  },
});
