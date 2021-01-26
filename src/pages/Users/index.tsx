import { gql, useMutation, useQuery } from '@apollo/client';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import AppContainer from '../../components/AppContainer';
import AppModal from '../../components/AppModal';
import Content from '../../components/Content';
import NavBar from '../../components/NavBar';
import UsersData from '../../components/UsersData';
import { useStyles } from './styles';

const CREATE_USER = gql`
  mutation(
    $name: String!
    $email: String!
    $password: String!
    $isAdmin: Boolean!
  ) {
    createUser(
      data: {
        name: $name
        email: $email
        password: $password
        isAdmin: $isAdmin
      }
    ) {
      id
    }
  }
`;

const FIND_ALL_USERS = gql`
  query {
    findAllUsers {
      id
      name
      email
      role
    }
  }
`;

const Users: React.FC = () => {
  const classes = useStyles();

  const [name, setName] = useState<String>('');
  const [email, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');

  const [createUser, { error }] = useMutation(CREATE_USER);

  useEffect(() => {
    if (error) {
      setAlertMessage('Erro ao criar o usuário!');
      setOpenAlert(true);
      return;
    }
  }, [error]);

  function Users() {
    const { data, loading } = useQuery(FIND_ALL_USERS);

    if (loading) {
      return <></>;
    }

    return <UsersData data={data.findAllUsers} />;
  }

  async function handleSubmit() {
    if (!name || !email || !password) {
      setAlertMessage('Preencha todos os campos!');
      setOpenAlert(true);
      return;
    }

    if (password.length < 6) {
      setAlertMessage('Senha deve ter pelo menos 6 caracteres!');
      setOpenAlert(true);
      return;
    }

    createUser({ variables: { name, email, password, isAdmin } });
    setName('');
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
    <AppContainer>
      <NavBar active="users" />

      <Content>
        <AppModal
          handleSubmit={handleSubmit}
          buttonText="Adicionar"
          title="Novo Usuário"
        >
          <form className={classes.form} autoComplete="off">
            <label className={classes.label} htmlFor="name">
              Nome
            </label>
            <TextField
              className={classes.input}
              id="name"
              variant="outlined"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label className={classes.label} htmlFor="email">
              Email
            </label>
            <TextField
              id="email"
              type="email"
              variant="outlined"
              className={classes.input}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label className={classes.label} htmlFor="password">
              Senha (min 6 caracteres)
            </label>
            <TextField
              id="password"
              type="password"
              variant="outlined"
              className={classes.input}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <label className={classes.label} htmlFor="isAdmin">
              Tipo Usuário
            </label>
            <RadioGroup
              style={{ display: 'flex', flexDirection: 'row' }}
              aria-label="isAdmin"
              name="isAdmin"
              value={isAdmin.toString()}
              onChange={e => setIsAdmin(e.target.value === 'true')}
            >
              <FormControlLabel
                value="false"
                control={<Radio color="primary" />}
                label="Colaborador"
              />
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Administrador"
              />
            </RadioGroup>
          </form>
        </AppModal>

        <Users />
      </Content>

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
    </AppContainer>
  );
};

export default Users;
