import { Button, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { theme } from './styles/globlal-styles';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </ThemeProvider>
  );
}

export default App;
