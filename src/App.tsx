import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Routes from './routes';
import { client } from './services/api';
import { theme } from './themes/global-theme';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
