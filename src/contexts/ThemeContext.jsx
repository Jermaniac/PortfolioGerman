import { createContext, useMemo, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, createTheme } from "@mui/material";
import { appTheme } from "@/themes/theme";

const LIGHT_THEME = "light";
const DARK_THEME = "dark";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(LIGHT_THEME);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
        );
      },
    }),
    []
  );

  const themeSelected = useMemo(() => createTheme(appTheme(mode)), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, colorMode }}>
      <ThemeProvider theme={themeSelected}>
        <CssBaseline></CssBaseline>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
