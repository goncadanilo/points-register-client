import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#219653',
    },
  },
  typography: {
    button: {
      fontSize: '18px',
      fontFamily: 'Montserrat',
      fontWeight: 900,
      textTransform: 'capitalize',
    },
    fontFamily: 'Montserrat',
  },
});
