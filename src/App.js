import React from 'react';
import { Grommet } from 'grommet';

import Header from './components/Header.jsx';
import Announcer from './components/Announcer.jsx';

const accentColor = "#33b04a"

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  }
}


function App() {
  return (
    <Grommet theme={theme}>
      <Header />
      <Announcer />
    </Grommet>
  );
}

export default App;
