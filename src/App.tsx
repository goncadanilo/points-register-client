import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Login from './pages/Login';
import { theme } from './themes/global-theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
