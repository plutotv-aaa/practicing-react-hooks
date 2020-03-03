import React from 'react';
import { NavLink } from 'react-router-dom';

import withStyles from '../../core/jss/theme/withStyles';
import { styles } from './NavStyles';

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
  {
    key: 'reacthree',
    className: 'reactThree',
    to: '/react-three',
    exact: false,
  },
  {
    key: 'cssgrid',
    className: 'CSSGrid',
    to: '/css-grid',
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
