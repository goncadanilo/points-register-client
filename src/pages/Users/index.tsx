import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core';
import React from 'react';
import AppContainer from '../../components/AppContainer';
import AppModal from '../../components/AppModal';
import Content from '../../components/Content';
import NavBar from '../../components/NavBar';
import UsersData from '../../components/UsersData';
import { useStyles } from './styles';

const Users: React.FC = () => {
  const classes = useStyles();

  return (
    <AppContainer>
      <NavBar active="users" />

      <Content>
        <AppModal buttonText="Adicionar" title="Novo Usuário">
          <form className={classes.form} autoComplete="off">
            <label className={classes.label} htmlFor="name">
              Nome
            </label>
            <TextField className={classes.input} id="name" variant="outlined" />
            <label className={classes.label} htmlFor="email">
              Email
            </label>
            <TextField
              id="email"
              type="email"
              variant="outlined"
              className={classes.input}
            />
            <label className={classes.label} htmlFor="password">
              Senha
            </label>
            <TextField
              id="password"
              type="password"
              variant="outlined"
              className={classes.input}
            />
            <label className={classes.label} htmlFor="password">
              Tipo Usuário
            </label>
            <RadioGroup
              style={{ display: 'flex', flexDirection: 'row' }}
              aria-label="isAdmin"
              name="isAdmin"
            >
              <FormControlLabel
                value={false}
                control={<Radio color="primary" />}
                label="Colaborador"
              />
              <FormControlLabel
                value={true}
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
