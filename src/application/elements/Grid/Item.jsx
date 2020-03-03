import React from 'react';
import withStyles from '../../../core/jss/theme/withStyles';
import { styles } from './GridItemStyles.js';

export const GridItemComponent = ({ classes }) => {
  return <div className={classes.gridItem}></div>;
};

export const GridItem = withStyles(styles)(GridItemComponent);
