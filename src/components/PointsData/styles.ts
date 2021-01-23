import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    gridItem: {
      paddingLeft: '20px',
    },
  }),
);
