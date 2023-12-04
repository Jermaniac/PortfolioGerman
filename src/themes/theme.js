import { blue, grey } from "@mui/material/colors";

import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  typography: {
    fontFamily: ["'Poppins'", "sans-serif"].join(","),
    h3: { fontWeight: 500 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    subtitle1: { fontWeight: 500 },
    body1: { fontWeight: 500 }
  },
  palette: {
    background: {
      lighter: grey[50],
      darker: grey[200],
    },
    border: {
      default: grey[200],
    },
    primary: {
      main: blue[900],
    },
    secondary: {
      main: blue[500],
    },
    terciary: {
      main: blue[50],
    },
    text: {
      primary: blue[800],
      secondary: blue[700],
      terciary: grey[900],
    },
  },
});
