import React from 'react';
import { Link } from 'react-router-dom';

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
      '& .active': {
        backgroundColor: '#4caf50',
        color: 'white',
      },
    },
  },
});

const paths = [
  { name: 'Render', to: '/' },
  { name: 'UseEffect', to: '/use-effect' },
  { name: 'UseRef', to: '/use-ref' },
  { name: 'UseReducer', to: '/use-reducer' },
  { name: 'useEventListener', to: '/use-event-listener' },
];

export const Nav = ({ classes }) => {
  return (
    <nav className={classes.nav}>
      {paths.map(({ name, to }, i) => (
        <Link key={name} to={to}>
          {name}
        </Link>
      ))}
    </nav>
  );
};

export const StyledNav = withStyles(styles)(Nav);
