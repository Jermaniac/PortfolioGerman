import "@fontsource-variable/onest";

export const appTheme = (mode) => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 600,
      lg: 813,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ["Onest Variable", "sans-serif"].join(","),
  },
  palette: {
    mode,
  },
});
