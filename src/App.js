import React from "react";

import { Grommet } from "grommet";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Announcer from "./components/Announcer.jsx";
import LandingPageButtons from "./components/LandingPageButtons.jsx";
import ClashRoyaleIdInput from "./components/ClashRoyaleIdInput.jsx";
import Drafter from './components/Drafter.jsx';

// const accentColor = "#33b04a";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Router>
        <Switch>
          <Router path="/drafter" exact>
            <Header />
            <Drafter />
          </Router>
          <Route path="/clashIdInput" exact>
            <Header />
            <Announcer />
            <ClashRoyaleIdInput />
          </Route>
          <Route path="/" exact>
            <Header />
            <Announcer />
            <LandingPageButtons />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  );
}

export default App;
