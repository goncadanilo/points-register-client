import { gql, useMutation } from '@apollo/client';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Snackbar,
  TextField,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Context } from '../../contexts/AuthContext';
import { useStyles } from './styles';

const LOGIN_USER = gql`
  mutation($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      user {
        id
        name
        role
      }
      token
    }
  }
`;

const Login: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();

  const { handleLogin } = useContext(Context);

  const [email, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');

  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');

  const [login, { data, error }] = useMutation(LOGIN_USER, {
    errorPolicy: 'all',
  });

  useEffect(() => {
    if (data) {
      const { token, user } = data.login;

      handleLogin(token, user);

      const path = user.role === 'ADMINISTRATOR' ? '/' : '/registers';
      history.push(path);
    }

    if (error) {
      setAlertMessage('Email/Senha incorretos!');
      setOpenAlert(true);
    }
  }, [data, error, handleLogin, history]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !password) {
      setAlertMessage('Preencha todos os campos!');
      setOpenAlert(true);
      return;
    }

    login({ variables: { email, password } });

    setEmail('');
    setPassword('');
  }

  const handleCloseAlert = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <Container className={classes.container} maxWidth={false}>
      <Grid container justify="space-between" alignItems="center">
        <Grid sm={6} className={classes.left} item>
          <img className={classes.logo} src={logo} alt="Logo" />
        </Grid>

        <Grid sm={5} className={classes.right} item>
          <Card className={classes.card} variant="outlined">
            <form autoComplete="off" onSubmit={handleSubmit}>
              <CardContent className={classes.cardContent}>
                <label className={classes.label} htmlFor="email">
                  Email
                </label>
                <TextField
                  className={classes.input}
                  id="email"
                  type="email"
                  variant="outlined"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <label className={classes.label} htmlFor="password">
                  Senha
                </label>
                <TextField
                  className={classes.input}
                  id="password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </CardContent>

              <CardActions>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Login
                </Button>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Grid>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity="error">
          {alertMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
