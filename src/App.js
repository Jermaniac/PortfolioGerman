import Header from "./components/header/Header";

import "./App.css";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { appTheme } from "./themes/theme";

const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <div className="App">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
