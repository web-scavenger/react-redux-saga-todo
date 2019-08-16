import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import Condition from './Condition';
import Item from './Item';

import config from '../config';

const styles = () => ({

});

const displayName = 'Todos';

const Todos = (props) => {
  const { styles, todos } = props;

  return (
    <Fragment>
      <Condition value={!!todos.length} message="You have not any Todos">
        {todos.length && todos.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </Condition>
    </Fragment>
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
