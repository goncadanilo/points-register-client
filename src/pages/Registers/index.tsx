import { gql, useMutation, useQuery } from '@apollo/client';
import { TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import AppContainer from '../../components/AppContainer';
import AppModal from '../../components/AppModal';
import Content from '../../components/Content';
import NavBar from '../../components/NavBar';
import PointsData from '../../components/PointsData';
import { Context } from '../../contexts/AuthContext';
import { useStyles } from './styles';

const CREATE_REGISTER = gql`
  mutation($timeRegistered: DateTime!) {
    createRegister(data: { timeRegistered: $timeRegistered }) {
      id
    }
  }
`;

const FIND_REGISTERS_BY_USER_ID = gql`
  query {
    findRegistersByUserId {
      id
      timeRegistered
      userConnection {
        name
      }
    }
  }
`;

export const Registers: React.FC = () => {
  const classes = useStyles();

  const { currentUser } = useContext(Context);

  const [timeRegistered, setTimeRegistered] = useState<String>('');

  const [createRegister] = useMutation(CREATE_REGISTER);

  async function handleSubmit() {
    if (!timeRegistered) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      createRegister({ variables: { timeRegistered } });
      setTimeRegistered('');
    } catch (e) {
      alert(e.message);
    }
  }

  function Registers() {
    const { data, loading } = useQuery(FIND_REGISTERS_BY_USER_ID);

    if (loading) {
      return <></>;
    }

    return <PointsData data={data} />;
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
              value={currentUser.name}
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

        <Registers />
      </Content>
    </AppContainer>
  );
};

export default Registers;
