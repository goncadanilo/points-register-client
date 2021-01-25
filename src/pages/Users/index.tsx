import { gql, useMutation } from '@apollo/client';
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
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

const Users: React.FC = () => {
  const classes = useStyles();

  const [name, setName] = useState<String>('');
  const [email, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const [createUser] = useMutation(CREATE_USER);

  async function handleSubmit() {
    if (!name || !email || !password) {
      alert('Preencha todos os campos!');
      return;
    }

    createUser({ variables: { name, email, password, isAdmin } });
    setName('');
    setEmail('');
    setPassword('');
  }

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
              Senha
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

        <UsersData />
      </Content>
    </AppContainer>
  );
};

export default Users;
