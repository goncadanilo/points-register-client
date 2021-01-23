import {
  Card,
  Container,
  Divider,
  Drawer,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToAppOutlined';
import PeopleAltIcon from '@material-ui/icons/PeopleAltOutlined';
import React from 'react';
import logoSmall from '../../assets/logo-small.svg';
import { useStyles } from './styles';

const Dashboard: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth={false}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <div>
              <div className={classes.toolbar}>
                <img style={{ width: '58px' }} src={logoSmall} alt="Logo" />
              </div>
              <List className={classes.list}>
                <Divider className={classes.divider} />
                <ListItem className={classes.listItem} button>
                  <ListItemIcon className={classes.listItemIcon}>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.listItemText}
                    primary="Dashboard"
                  />
                </ListItem>
                <Divider className={classes.divider} />
                <ListItem className={classes.listItem} button>
                  <ListItemIcon className={classes.listItemIcon}>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.listItemText}
                    primary="Meus Registros"
                  />
                </ListItem>
                <Divider className={classes.divider} />
                <ListItem className={classes.listItem} button>
                  <ListItemIcon className={classes.listItemIcon}>
                    <PeopleAltIcon />
                  </ListItemIcon>
                  <ListItemText
                    className={classes.listItemText}
                    primary="Colaboradores"
                  />
                </ListItem>
                <Divider className={classes.divider} />
              </List>
            </div>
            <div>
              <List className={classes.list}>
                <ListItem className={classes.listItem} button>
                  <ListItemIcon className={classes.listItemIcon}>
                    <ExitToAppIcon />
                  </ListItemIcon>
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
      </nav>

      <Container className={classes.content}>
        <Grid container justify="space-between" alignItems="center">
          <Grid sm={5} container item>
            <Typography variant="h2" gutterBottom>
              Colaborador
            </Typography>
          </Grid>
          <Grid sm={4} container item>
            <Typography variant="h2" gutterBottom>
              Data
            </Typography>
          </Grid>
          <Grid sm={2} container item>
            <Typography variant="h2" gutterBottom>
              Hora
            </Typography>
          </Grid>
        </Grid>

        <Grid container justify="space-between" alignItems="center">
          <Card className={classes.card} variant="outlined">
            <div className={classes.verticalDivider}></div>
            <Grid sm={4} className={classes.gridFirstItem} item>
              <Typography variant="h2">João Silva</Typography>
            </Grid>
            <Grid sm={4} item>
              <Typography variant="h3">12/10/19</Typography>
            </Grid>
            <Grid sm={2} item>
              <Typography variant="h4">9:00h</Typography>
            </Grid>
          </Card>

          <Card className={classes.card} variant="outlined">
            <div className={classes.verticalDivider}></div>
            <Grid sm={4} className={classes.gridFirstItem} item>
              <Typography variant="h2">João Silva</Typography>
            </Grid>
            <Grid sm={4} item>
              <Typography variant="h3">12/10/19</Typography>
            </Grid>
            <Grid sm={2} item>
              <Typography variant="h4">9:00h</Typography>
            </Grid>
          </Card>

          <Card className={classes.card} variant="outlined">
            <div className={classes.verticalDivider}></div>
            <Grid sm={4} className={classes.gridFirstItem} item>
              <Typography variant="h2">João Silva</Typography>
            </Grid>
            <Grid sm={4} item>
              <Typography variant="h3">12/10/19</Typography>
            </Grid>
            <Grid sm={2} item>
              <Typography variant="h4">9:00h</Typography>
            </Grid>
          </Card>

          <Card className={classes.card} variant="outlined">
            <div className={classes.verticalDivider}></div>
            <Grid sm={4} className={classes.gridFirstItem} item>
              <Typography variant="h2">João Silva</Typography>
            </Grid>
            <Grid sm={4} item>
              <Typography variant="h3">12/10/19</Typography>
            </Grid>
            <Grid sm={2} item>
              <Typography variant="h4">9:00h</Typography>
            </Grid>
          </Card>
        </Grid>
      </Container>
    </Container>
  );
};

export default Dashboard;
