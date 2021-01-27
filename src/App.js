import React, { Suspense } from "react";
import "style.css";

import Generator from "./generator/generator";
import "tailwindcss/dist/base.css";

import { themes, ThemeContext } from "contexts/themeContext";
import { StartupContext } from "contexts/startUpContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import AnimationRevealPage from "helpers/AnimationRevealPage";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Page = () => {
  const query = useQuery();
  if (!query.get("seed")) {
    return <Redirect to={`/startup-generator?seed=${new Date().getTime()}`} />;
  }

  const generator = new Generator(Number(query.get("seed")));

  const [random, startUp] = generator.initialize();

  document.title = startUp.name;

  const themeObjects = Object.values(themes);
  const randomTheme = themeObjects[random.nextInt() % themeObjects.length];
  return (
    <ThemeContext.Provider value={randomTheme}>
      <StartupContext.Provider value={[random, startUp]}>
        <Suspense fallback={null}>
          <AnimationRevealPage>{startUp.pageElements}</AnimationRevealPage>
        </Suspense>
      </StartupContext.Provider>
    </ThemeContext.Provider>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route>
          <Page />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
