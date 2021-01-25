import { gql, useMutation } from '@apollo/client';
import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import AppContainer from '../../components/AppContainer';
import AppModal from '../../components/AppModal';
import Content from '../../components/Content';
import NavBar from '../../components/NavBar';
import PointsData from '../../components/PointsData';
import { useStyles } from './styles';

const CREATE_REGISTER = gql`
  mutation($timeRegistered: DateTime!) {
    createRegister(data: { timeRegistered: $timeRegistered }) {
      id
    }
  }
`;

export const Registers: React.FC = () => {
  const classes = useStyles();

  const [timeRegistered, setTimeRegistered] = useState<String>('');

  const [createRegister] = useMutation(CREATE_REGISTER);

  async function handleSubmit() {
    if (!timeRegistered) {
      alert('Preencha todos os campos!');
      return;
    }

    createRegister({ variables: { timeRegistered } });
    setTimeRegistered('');
  }

  return (
    <AppContainer>
      <NavBar active="registers" />

      <Content>
        <AppModal
          handleSubmit={handleSubmit}
          buttonText="Registrar"
          title="Novo Registro"
        >
          <form className={classes.form} autoComplete="off">
            <label className={classes.label} htmlFor="user">
              Colaborador
            </label>
            <TextField
              className={classes.input}
              id="user"
              variant="outlined"
              value="João Silva"
              disabled
            />
            <label className={classes.label} htmlFor="datetime">
              Data/Hora
            </label>
            <TextField
              id="datetime"
              type="datetime-local"
              variant="outlined"
              className={classes.input}
              value={timeRegistered}
              onChange={e => setTimeRegistered(e.target.value)}
            />
          </form>
        </AppModal>

        <PointsData />
      </Content>
    </AppContainer>
  );
};

export default Registers;
