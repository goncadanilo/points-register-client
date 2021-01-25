import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useStyles } from './styles';

interface Props {
  children: JSX.Element[] | JSX.Element;
  buttonText: string;
  title: string;
  handleSubmit: any;
}

const AppModal: React.FC<Props> = ({
  children,
  buttonText,
  title,
  handleSubmit,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function handleModal() {
    setOpen(!open);
  }

  return (
    <>
      <Button
        onClick={handleModal}
        className={classes.button}
        variant="contained"
        color="primary"
      >
        {buttonText}
      </Button>

      <Dialog
        onClose={handleModal}
        aria-labelledby="dialog"
        open={open}
        fullScreen
        classes={{
          scrollPaper: classes.dialogScrollPaper,
          paper: classes.dialogPaper,
        }}
      >
        <DialogTitle id="dialog">{title}</DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions
          classes={{
            root: classes.dialogActions,
          }}
        >
          <Button
            className={classes.actionsButton}
            variant="contained"
            onClick={() => handleSubmit().then(handleModal)}
            color="primary"
            type="button"
          >
            Salvar
          </Button>
          <Button
            className={classes.actionsButton}
            variant="outlined"
            onClick={handleModal}
            color="primary"
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AppModal;
