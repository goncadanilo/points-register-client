import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { theme } from './themes/global-theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello</h1>
    </ThemeProvider>
  );
}

export default App;
