import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      marginTop: '30px',
    },
    label: {
      fontSize: '14px',
      fontFamily: 'Montserrat',
      fontWeight: 400,
    },
    input: {
      background: '#F2F2F2',
      width: '100%',
      marginTop: '8px',
      marginBottom: '18px',

      '& .MuiOutlinedInput-notchedOutline': {
        border: 0,
      },

      '& .MuiOutlinedInput-input': {
        fontSize: '18px',
        fontFamily: 'Montserrat',
        fontWeight: 300,
      },
    },
  }),
);
