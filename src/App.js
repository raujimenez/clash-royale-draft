import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Announcer from "./components/Announcer";
import LandingPageNavigation from "./components/LandingPageNavigation";
import PlayerDraft from "./components/PlayerDraft";
import PlayerDraftChooser from "./components/PlayerDraftChooser";

function App() {
  return (
    <div>
      <Announcer />
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPageNavigation />
          </Route>
          <Route path="/playerdraft/chooser" exact>
            <PlayerDraftChooser />
          </Route>
          <Route path="/playerdraft/samedevice" exact>
            <PlayerDraft />
          </Route>
          <Route path="/playerdraft/differentDevice" exact>
            <div></div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
