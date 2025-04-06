import Main from "@/components/main/Main";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/contexts/ThemeContext";

const App = () => {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Main></Main>
        <Footer></Footer>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
