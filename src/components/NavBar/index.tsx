import {
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToAppOutlined';
import PeopleAltIcon from '@material-ui/icons/PeopleAltOutlined';
import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import logoSmall from '../../assets/logo-small.svg';
import { Context } from '../../contexts/AuthContext';
import { useStyles } from './styles';

interface Props {
  active: string;
}

const NavBar: React.FC<Props> = ({ active }) => {
  const classes = useStyles();

  const { handleLogout, currentUser } = useContext(Context);

  return (
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

              {currentUser.role === 'ADMINISTRATOR' ? (
                active === 'dashboard' ? (
                  <Link className={classes.link} to="/">
                    <ListItem className={classes.active}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.listItemText}
                        primary="Dashboard"
                      />
                    </ListItem>
                  </Link>
                ) : (
                  <Link className={classes.link} to="/">
                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.listItemText}
                        primary="Dashboard"
                      />
                    </ListItem>
                  </Link>
                )
              ) : (
                <>
                  <Redirect to="/registers" />
                  <Link className={classes.link} to="/registers">
                    <ListItem className={classes.blocked}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.listItemText}
                        primary="Dashboard"
                      />
                    </ListItem>
                  </Link>
                </>
              )}

              <Divider className={classes.divider} />

              {active === 'registers' ? (
                <Link className={classes.link} to="/registers">
                  <ListItem className={classes.active}>
                    <ListItemIcon className={classes.listItemIcon}>
                      <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText
                      className={classes.listItemText}
                      primary="Meus Registros"
                    />
                  </ListItem>
                </Link>
              ) : (
                <Link className={classes.link} to="/registers">
                  <ListItem className={classes.listItem}>
                    <ListItemIcon className={classes.listItemIcon}>
                      <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText
                      className={classes.listItemText}
                      primary="Meus Registros"
                    />
                  </ListItem>
                </Link>
              )}

              <Divider className={classes.divider} />

              {currentUser.role === 'ADMINISTRATOR' ? (
                active === 'users' ? (
                  <Link className={classes.link} to="/users">
                    <ListItem className={classes.active}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <PeopleAltIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.listItemText}
                        primary="Usuários"
                      />
                    </ListItem>
                  </Link>
                ) : (
                  <Link className={classes.link} to="/users">
                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <PeopleAltIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.listItemText}
                        primary="Usuários"
                      />
                    </ListItem>
                  </Link>
                )
              ) : (
                <>
                  <Redirect to="/registers" />
                  <Link className={classes.link} to="/registers">
                    <ListItem className={classes.blocked}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <PeopleAltIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.listItemText}
                        primary="Usuários"
                      />
                    </ListItem>
                  </Link>
                </>
              )}

              <Divider className={classes.divider} />
            </List>
          </div>

          <div>
            <List className={classes.list}>
              <ListItem
                className={classes.listItem}
                onClick={handleLogout}
                button
              >
                <ListItemIcon className={classes.listItemIcon}>
                  <ExitToAppIcon />
                </ListItemIcon>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default NavBar;
