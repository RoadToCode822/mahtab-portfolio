import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import Navbar from './components/layout/Navbar';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      Hello
    </ThemeProvider>
  );
}

export default App;
