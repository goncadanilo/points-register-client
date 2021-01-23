import { Card, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

const PointsData: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container justify="space-between" alignItems="center">
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

      <Card className={classes.card} variant="outlined">
        <div className={classes.verticalDivider}></div>
        <Grid sm={4} className={classes.gridItem} item>
          <Typography variant="h2">João Silva</Typography>
        </Grid>
        <Grid sm={4} item>
          <Typography variant="h3">12/10/19</Typography>
        </Grid>
        <Grid sm={2} item>
          <Typography variant="h4">9:00h</Typography>
        </Grid>
      </Card>
    </Grid>
  );
};

export default PointsData;
