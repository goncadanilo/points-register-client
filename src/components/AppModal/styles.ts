import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      alignSelf: 'flex-end',
      border: 0,
      borderRadius: 0,
      boxShadow: 'none',
      width: '160px',
      height: '55px',

      '&:hover': {
        boxShadow: 'none',
      },
    },
    dialogScrollPaper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    dialogPaper: {
      width: '400px',
    },
    dialogActions: {
      justifyContent: 'space-evenly',
    },
    actionsButton: {
      borderRadius: 0,
      boxShadow: 'none',
      width: '132px',
      height: '42px',

      '&:hover': {
        boxShadow: 'none',
      },
    },
  }),
);
