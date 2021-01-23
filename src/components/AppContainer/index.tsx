import { Container } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const AppContainer: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxWidth={false}>
      {children}
    </Container>
  );
};

export default AppContainer;
