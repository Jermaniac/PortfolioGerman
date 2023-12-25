export const appTheme = (mode) => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ["'Poppins'", "sans-serif"].join(","),
    h3: {
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h4: {
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "1.6rem",
      },
    },
    h5: {
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "0.8rem",
      },
      "@media (max-width:300px)": {
        fontSize: "0.6rem",
      },
    },
    h6: {
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "0.7rem",
      },
      "@media (max-width:300px)": {
        fontSize: "0.6rem",
      },
    },
    subtitle1: {
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "0.7rem",
      },
      "@media (max-width:300px)": {
        fontSize: "0.6rem",
      },
    },
    body1: { fontWeight: 500 },
  },
  palette: {
    mode,
  },
});
