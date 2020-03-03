import React from 'react';
import withStyles from '../../core/jss/theme/withStyles';

const styles = theme => ({
  gridDisplay: {
    backgroundColor: '#AAA',
    backgroundSize: '340px, auto',
    margin: 50,
  },
});

export const GridDisplayComponent = ({ classes, children }) => {
  return <div className={classes.gridDisplay}>{children}</div>;
};

export const GridDisplay = withStyles(styles)(GridDisplayComponent);
