import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

      cursor: 'pointer',
    },
    listItemIcon: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#A5A5A5',
    },
    listItemText: {
      fontFamily: 'Nunito',
      fontWeight: 300,
    },
    link: {
      width: '100%',
      textDecoration: 'none',
      color: '#A5A5A5',
    },
    active: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '20px',
      paddingBottom: '20px',
      cursor: 'pointer',

      color: theme.palette.primary.main,
      borderLeft: `5px solid ${theme.palette.primary.main}`,
      paddingLeft: '11px',

      '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main,
      },
    },
    blocked: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '20px',
      paddingBottom: '20px',
      cursor: 'not-allowed',
      color: '#A5A5A5',
    },
  }),
);
