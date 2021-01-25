import { Card, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

interface Props {
  data?: [
    {
      id: string;
      name: string;
      email: string;
      role: string;
    },
  ];
}

const UsersData: React.FC<Props> = ({ data }) => {
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

      {data && data.length > 0 ? (
        data.map(item => (
          <Card key={item.id} className={classes.card} variant="outlined">
            <div className={classes.verticalDivider}></div>
            <Grid sm={4} item>
              <Typography variant="h2">{item.name}</Typography>
            </Grid>
            <Grid sm={4} item>
              <Typography variant="h3">{item.email}</Typography>
            </Grid>
            <Grid sm={2} item>
              <Typography variant="h3">
                {item.role === 'ADMINISTRATOR'
                  ? 'Administrador'
                  : 'Colaborador'}
              </Typography>
            </Grid>
          </Card>
        ))
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20vh',
            width: '100%',
          }}
        >
          <h1>Nenhum registro encontrado!</h1>
        </div>
      )}
    </Grid>
  );
};

export default UsersData;
