import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#219653',
      light: '#6FCF97',
    },
  },
  typography: {
    button: {
      fontSize: '18px',
      fontFamily: 'Montserrat',
      fontWeight: 900,
      textTransform: 'capitalize',
    },
    body1: {
      fontFamily: 'Nunito',
      fontWeight: 300,
      fontSize: '15px',
    },
    h2: {
      fontFamily: 'Nunito',
      fontWeight: 400,
      fontSize: '25px',
      color: '#303030',
      lineHeight: '34px',
      letterSpacing: '0.02em',
    },
    h3: {
      fontFamily: 'Nunito',
      fontWeight: 400,
      fontSize: '22px',
      color: '#888888',
      lineHeight: '30px',
      letterSpacing: '0.02em',
    },
    h4: {
      fontFamily: 'Nunito',
      fontWeight: 400,
      fontSize: '39px',
      color: '#888888',
      lineHeight: '53px',
      letterSpacing: '0.02em',
    },
  },
});
