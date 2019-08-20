import * as React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import config from '../config';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      width: '100%',
      height: '10vh',
      lineHeight: '10vh',
      background: config.colors.btnBG,
      color: config.colors.themeFont,
      fontSize: '30px',
    },
  }),
);


const displayName = 'Header';

interface HeaderProps {
  children : string
}

const Header: React.SFC<HeaderProps> = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.header}>
      { children }
    </div>
  );
};


Header.displayName = displayName;

export default Header;
