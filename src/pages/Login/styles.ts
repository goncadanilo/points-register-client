import { createStyles, makeStyles, Theme } from '@material-ui/core';
import background from '../../assets/background.png';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      height: '100vh',
      paddingRight: 0,
      backgroundColor: '#333',
    },
    left: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: '380px',
    },
    right: {
      height: '95vh',
      backgroundImage: `url(${background})`,
      backgroundPosition: 'left',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '350px',
      width: '450px',
      padding: '25px',
      borderRadius: '40px',
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '8px',
    },
    label: {
      fontSize: '16px',
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
        fontSize: '16px',
        fontFamily: 'Montserrat',
        fontWeight: 400,
      },
    },
    button: {
      border: 0,
      borderRadius: 0,
      boxShadow: 'none',
      width: '112px',
      height: '47px',

      '&:hover': {
        boxShadow: 'none',
      },
    },
  }),
);
