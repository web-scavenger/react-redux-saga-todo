import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import Condition from './Condition';
import Item from './Item';

import config from '../config';

const styles = () => ({
  todos: {
    width: '100%',
    padding: '5px',
    background: '#f1f1f1',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },
});

const displayName = 'Todos';

const Todos = (props) => {
  const { classes, todos } = props;

  return (
    <Condition value={!!todos.length} message="You have not any Todos">
      <div className={classes.todos}>
        {todos.length && todos.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </div>

    </Condition>
  );
};

Todos.displayName = displayName;

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todos);

export default withStyles(styles)(withConnect);
