import React from 'react';
import { withStyles } from '@material-ui/core';

import { connect } from 'react-redux';
import { TOGGLE_TODO } from '../actions/actions';

import RemoveItemBtn from './RemoveItemBtn';
import ItemTitle from './ItemTitle';

const styles = () => ({
  item: {
    padding: '5px',
    textAlign: 'left',
    borderBottom: '1px solid #b5b5b5',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:last-child': {
      borderBottom: 'none',
    },

  },
  completed: {
    textDecoration: 'line-through',
    color: '#b5b5b5',
  },
});

const displayName = 'Item';

const Item = (props) => {
  const { classes, item } = props;

  return (
    <div className={classes.item}>
      <ItemTitle item={item} />
      <RemoveItemBtn id={item.id} />
    </div>
  );
};

Item.displayName = displayName;

export default withStyles(styles)(Item);
