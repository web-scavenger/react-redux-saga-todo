import React from 'react';
import { withStyles } from '@material-ui/styles';

import config from '../config';

const styles = ({
  header: {
    width: '100%',
    height: '10vh',
    lineHeight: '10vh',
    background: config.colors.btnBG,
    color: config.colors.themeFont,
    fontSize: '30px',
  },
});

const displayName = 'Header';

const Header = (props) => {
  const { classes, children } = props;

  return (
    <div className={classes.header}>
      { children }
    </div>
  );
};

Header.displayName = displayName;

export default withStyles(styles)(Header);
