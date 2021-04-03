import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Announcer from "./components/Announcer";
import LandingPageButtons from "./components/LandingPageButtons";

// const accentColor = "#33b04a";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Announcer />
            <LandingPageButtons />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
