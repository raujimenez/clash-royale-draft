import React from 'react';
import { Grommet } from 'grommet';
import Header from './components/Header.jsx';

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
    </Grommet>
  );
}

export default App;
