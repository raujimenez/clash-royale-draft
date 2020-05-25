import React from "react";
import { Grommet } from "grommet";

import './components/ParticleComponent';

import Header from "./components/Header.jsx";
import Announcer from "./components/Announcer.jsx";
import LandingPageButtons from "./components/LandingPageButtons.jsx";
import ParticleComponent from "./components/ParticleComponent";

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
        <ParticleComponent /> 
        <Header />
        <Announcer />
        <LandingPageButtons />
    </Grommet>
  );
}

export default App;
