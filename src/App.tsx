import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Routes from './routes';
import { theme } from './themes/global-theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
