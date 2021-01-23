import { Container } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Content: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return <Container className={classes.content}>{children}</Container>;
};

export default Content;
