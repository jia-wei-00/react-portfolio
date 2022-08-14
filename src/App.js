import { Route, Switch, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
import { AnimatePresence } from "framer-motion";

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import ExperiencePage from "./components/ExperiencePage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import SoundBar from "./subComponents/SoundBar";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        {/* Framer-motion for page change */}
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/experience" component={ExperiencePage} />
            <Route exact path="/work" component={WorkPage} />
            <Route exact path="/skills" component={MySkillsPage} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
