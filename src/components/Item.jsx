import React from 'react';
import { withStyles } from '@material-ui/core';

import config from '../config';


const styles = () => ({

});

const displayName = 'Item';

const Item = (props) => {
  const { styles, item } = props;
  return (
    <div>
      {item.title}
    </div>
  );
};

Item.displayName = displayName;

export default withStyles(styles)(Item);
