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
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: 145,
        flexShrink: 0,
      },
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px',
      paddingTop: '30px',
      paddingLeft: '36px',
      paddingRight: '40px',
    },
    drawerPaper: {
      width: 145,
      boxShadow: '0px 4px 10px 0px rgba(0,0,0,0.1)',
      borderRight: 'none',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    divider: {
      color: '#4F4F4F',
      width: '92px',
      height: '0.8px',
    },
    listItem: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '20px',
      paddingBottom: '20px',

      '&:hover': {
        backgroundColor: '#fff',
      },

      '&:focus': {
        backgroundColor: '#fff',
      },
    },
    listItemIcon: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    listItemText: {
      fontFamily: 'Nunito',
      fontWeight: 300,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      maxWidth: '75vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: '50px',
      marginBottom: '50px',
    },
    card: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '70px',
      width: '100%',
      borderRadius: '15px',
      paddingLeft: '21px',
      marginTop: '10px',
      marginBottom: '8px',
      boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.1)',
    },
    verticalDivider: {
      border: '2px',
      borderStyle: 'solid',
      borderColor: theme.palette.primary.light,
      borderRadius: '30px',
      height: '55%',
    },
    gridFirstItem: {
      paddingLeft: '20px',
    },
  }),
);
