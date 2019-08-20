import React from 'react';
import { withStyles } from '@material-ui/core';

import { connect } from 'react-redux';
import { TOGGLE_TODO } from '../actions/actions';

import RemoveItemBtn from './RemoveItemBtn';

import config from '../config';


const styles = () => ({
  itemTitle: {
    padding: '5px',
    textAlign: 'left',
    cursor: 'pointer',
  },
  completed: {
    textDecoration: 'line-through',
    color: '#b5b5b5',
  },
});

const displayName = 'ItemTitle';

const ItemTitle = (props) => {
  const { classes, item, onToggleTodo } = props;

  const onClick = (id) => {
    onToggleTodo(id);
  };


  const completed = item.completed ? classes.completed : null;

  return (
    <div
      className={`${classes.itemTitle} ${completed}`}
      onClick={() => onClick(item.id)}
    >
      {item.title}
    </div>
  );
};

ItemTitle.displayName = displayName;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onToggleTodo: (id) => {
    dispatch({ type: TOGGLE_TODO, id });
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemTitle);

export default withStyles(styles)(withConnect);
