import { makeStyles } from '@material-ui/core'
import React from 'react'
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const drawerWidth = 240

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%'
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: 'flex'
  },
  active: {
    background: '#f2f2f2'
  }
})

export default function Layout({ children }) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/'
    },
    {
      text: 'Create Notes',
      icon: <AddCircleOutlined color="secondary" />,
      path: '/create'
    },
  ]
  return (
    <div className={classes.root}>
      {/* app bar */}
      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography>
            Ninja Notes
          </Typography>
        </div>
        {/* List / Links */}
        <List>
          {menuItems.map((item) => (
            <div className={location.pathname === item.path ? classes.active : null}>
              <ListItem
                button
                key={item.text}
                onClick={() => history.push(item.path)}
              // selected={location.pathname === item.path}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </div>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>{children}</div>
    </div>
  )
}
