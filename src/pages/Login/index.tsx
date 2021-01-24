import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  TextField,
} from '@material-ui/core';
import React from 'react';
import logo from '../../assets/logo.svg';
import { useStyles } from './styles';

const Login: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth={false}>
      <Grid container justify="space-between" alignItems="center">
        <Grid sm={6} className={classes.left} item>
          <img className={classes.logo} src={logo} alt="Logo" />
        </Grid>

        <Grid sm={5} className={classes.right} item>
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.cardContent}>
              <form autoComplete="off">
                <label className={classes.label} htmlFor="email">
                  Email
                </label>
                <TextField
                  className={classes.input}
                  id="email"
                  type="email"
                  variant="outlined"
                />
                <label className={classes.label} htmlFor="password">
                  Senha
                </label>
                <TextField
                  className={classes.input}
                  id="password"
                  type="password"
                  variant="outlined"
                />
              </form>
            </CardContent>

            <CardActions>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
