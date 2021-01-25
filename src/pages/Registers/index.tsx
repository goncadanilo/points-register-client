import { gql, useMutation, useQuery } from '@apollo/client';
import { Snackbar, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useContext, useEffect, useState } from 'react';
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
  query($id: String!) {
    findRegistersByUserId(id: $id) {
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

  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [timeRegistered, setTimeRegistered] = useState<String>('');

  const [createRegister, { error }] = useMutation(CREATE_REGISTER);

  useEffect(() => {
    if (error) {
      setAlertMessage('Error ao criar o registro!');
      setOpenAlert(true);
    }
  }, [error]);

  async function handleSubmit() {
    if (!timeRegistered) {
      setAlertMessage('Preencha o campo Data/Hora!');
      setOpenAlert(true);
      return;
    }

    createRegister({ variables: { timeRegistered } });
    setTimeRegistered('');
  }

  function Registers() {
    const { data, loading } = useQuery(FIND_REGISTERS_BY_USER_ID, {
      variables: { id: currentUser.id },
    });

    if (loading) {
      return <></>;
    }

    return <PointsData data={data.findRegistersByUserId} />;
  }

  const handleCloseAlert = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

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

export default Registers;
