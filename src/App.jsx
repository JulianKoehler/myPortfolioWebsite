import { useState } from "react";
import { ThemeProvider } from "styled-components";

import Header from "./components/Navbar/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import MyWork from "./pages/MyWork";
import Contact from "./pages/Contact";
import GlobalStyles from "./styles/Global";
import theme from "./styles/theme";
import useLocalStorage from "./hooks/useLocalStorage";
import BottomNavbar from "./components/Navbar/BottomNavbar";

const EnumThemes = {
  DARK: 0,
  LIGHT: 1,
};

const storedColorTheme = useLocalStorage("theme");

function App() {
  const [colorTheme, setColorTheme] = useState(
    storedColorTheme ? storedColorTheme.current : EnumThemes.LIGHT
  );

  function changeThemeHandler() {
    if (colorTheme === EnumThemes.LIGHT) {
      setColorTheme(EnumThemes.DARK);
      useLocalStorage("theme", "set", { current: EnumThemes.DARK });
    }
    if (colorTheme === EnumThemes.DARK) {
      setColorTheme(EnumThemes.LIGHT);
      useLocalStorage("theme", "set", { current: EnumThemes.LIGHT });
    }
    return;
  }

  return (
    <ThemeProvider theme={colorTheme === EnumThemes.LIGHT ? theme.light : theme.dark}>
      <GlobalStyles />
      <Header
        colorTheme={colorTheme}
        onChangeTheme={changeThemeHandler}
      />
      <Home />
      <Skills colorTheme={colorTheme} />
      <MyWork />
      <About />
      <Contact />
      <BottomNavbar />
    </ThemeProvider>
  );
}

export default App;
