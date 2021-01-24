import { Card, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

const UsersData: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.grid}
      container
      justify="space-between"
      alignItems="center"
    >
      <Grid sm={5} container item>
        <Typography variant="h2" gutterBottom>
          Nome
        </Typography>
      </Grid>
      <Grid sm={4} container item>
        <Typography variant="h2" gutterBottom>
          Email
        </Typography>
      </Grid>
      <Grid sm={2} container item>
        <Typography variant="h2" gutterBottom>
          Tipo Usuário
        </Typography>
      </Grid>

      <Card className={classes.card} variant="outlined">
        <div className={classes.verticalDivider}></div>
        <Grid sm={4} item>
          <Typography variant="h2">João Silva</Typography>
        </Grid>
        <Grid sm={4} item>
          <Typography variant="h3">joao@brainny.cc</Typography>
        </Grid>
        <Grid sm={2} item>
          <Typography variant="h3">Colaborador</Typography>
        </Grid>
      </Card>
    </Grid>
  );
};

export default UsersData;
