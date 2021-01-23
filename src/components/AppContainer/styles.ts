import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      height: '100%',
      minHeight: '100vh',
      paddingRight: 0,
      paddingLeft: 0,
      backgroundColor: '#F2F2F2',
    },
  }),
);
