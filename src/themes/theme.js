import { blue } from "@mui/material/colors";
import { grey } from "@mui/material/colors";

import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  typography: {
    fontFamily: ["'Poppins'", "sans-serif"].join(","),
  },
  palette: {
    background: {
      default: blue[0],
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
      primary: grey[900],
    },
  },
});
