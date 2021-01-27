import React from "react";
import "style.css";

import Generator from "./generator/generator";
import "tailwindcss/dist/base.css";

import { themes, ThemeContext } from "contexts/themeContext";
import { StartupContext } from "contexts/startUpContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import AnimationRevealPage from "helpers/AnimationRevealPage";

const Page = () => {
  const { id } = useParams();

  const generator = new Generator(Number(id));

  const [random, startUp] = generator.initialize();

  document.title = startUp.name;

  const themeObjects = Object.values(themes);
  const randomTheme = themeObjects[random.nextInt() % themeObjects.length];
  return (
    <ThemeContext.Provider value={randomTheme}>
      <StartupContext.Provider value={[random, startUp]}>
        <AnimationRevealPage>{startUp.pageElements}</AnimationRevealPage>
      </StartupContext.Provider>
    </ThemeContext.Provider>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/startup-generator/:id/">
          <Page />
        </Route>
        <Redirect to={`/startup-generator/${new Date().getTime()}`} />
      </Switch>
    </Router>
  );
};

export default App;
