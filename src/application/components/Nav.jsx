import React from 'react';
import { NavLink } from 'react-router-dom';

import withStyles from '../../core/jss/theme/withStyles';

const styles = theme => ({
  nav: {
    display: 'flex',
    backgroundColor: 'rgb(53, 59, 69)',
    overflow: 'hidden',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    '& a': {
      padding: '14px 16px',
      listStyle: 'none',
      color: '#f2f2f2',
      textAlign: 'center',
      textDecoration: 'none',
      fontSize: '17px',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: '#ddd',
        color: 'black',
      },
      '&.active': {
        backgroundColor: '#ddd',
        color: 'black',
      },
    },
  },
});

const paths = [
  { key: 'render', className: 'Render', to: '/', exact: true },
  { key: 'useseffect', className: 'UseEffect', to: '/use-effect', exact: false },
  { key: 'useref', className: 'UseRef', to: '/use-ref', exact: false },
  { key: 'usereducer', className: 'UseReducer', to: '/use-reducer', exact: false },
  {
    key: 'useeventlistener',
    className: 'useEventListener',
    to: '/use-event-listener',
    exact: false,
  },
];

export const Nav = ({ classes }) => {
  return (
    <nav className={classes.nav}>
      {paths.map(path => (
        <NavLink {...path}>{path.className}</NavLink>
      ))}
    </nav>
  );
};

export const StyledNav = withStyles(styles)(Nav);
