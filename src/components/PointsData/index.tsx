import { Card, Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useStyles } from './styles';

interface Props {
  data?: {
    findRegistersByUserId: [
      {
        id: string;
        timeRegistered: Date;
        userConnection: {
          name: string;
        };
      },
    ];
  };
}

const PointsData: React.FC<Props> = ({ data }) => {
  const classes = useStyles();

  useEffect(() => {}, [data]);

  return (
    <Grid
      className={classes.grid}
      container
      justify="space-between"
      alignItems="center"
    >
      <Grid sm={5} container item>
        <Typography variant="h2" gutterBottom>
          Colaborador
        </Typography>
      </Grid>
      <Grid sm={4} container item>
        <Typography variant="h2" gutterBottom>
          Data
        </Typography>
      </Grid>
      <Grid sm={2} container item>
        <Typography variant="h2" gutterBottom>
          Hora
        </Typography>
      </Grid>

      {data ? (
        data.findRegistersByUserId.map(item => (
          <Card key={item.id} className={classes.card} variant="outlined">
            <div className={classes.verticalDivider}></div>
            <Grid sm={4} item>
              <Typography variant="h2">{item.userConnection.name}</Typography>
            </Grid>
            <Grid sm={4} item>
              <Typography variant="h3">
                {new Date(item.timeRegistered).toLocaleDateString()}
              </Typography>
            </Grid>
            <Grid sm={2} item>
              <Typography variant="h4">
                {new Date(item.timeRegistered).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
                h
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

export default PointsData;
