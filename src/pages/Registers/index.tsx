import { TextField } from '@material-ui/core';
import React from 'react';
import AppContainer from '../../components/AppContainer';
import AppModal from '../../components/AppModal';
import Content from '../../components/Content';
import NavBar from '../../components/NavBar';
import PointsData from '../../components/PointsData';
import { useStyles } from './styles';

export const Registers: React.FC = () => {
  const classes = useStyles();

  return (
    <AppContainer>
      <NavBar active="registers" />

      <Content>
        <AppModal
          handleSubmit={() => {}}
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
            />
          </form>
        </AppModal>

        <PointsData />
      </Content>
    </AppContainer>
  );
};

export default Registers;
