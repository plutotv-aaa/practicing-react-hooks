import React from 'react';
import withStyles from '../../../core/jss/theme/withStyles';
import { styles } from './GridContainerStyles.js';

export const GridContainerComponent = ({ classes, children }) => {
  return <div className={classes.gridContainer}>{children}</div>;
};

export const GridContainer = withStyles(styles)(GridContainerComponent);
