import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { GET_INIT_DATA_ASYNC } from './actions/actions';

import {
  TodoInput, Todos, AddButton, Condition, Header,
} from './components';

import config from './config';

const styles = () => ({
  mainFragment: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: config.colors.mainBG,
    color: config.colors.themeFont,
  },
  container: {
    width: '70%',
  },
});

const displayName = 'App';

const App = (props) => {
  const { onFetchInitData, classes, error } = props;

  useEffect(() => {
    onFetchInitData();
  });

  return (
    <div className={classes.mainFragment}>
      <Header>Todo List</Header>

      <div className={classes.container}>
        <Condition value={!!error} message={null}>
          {error}
        </Condition>
        <TodoInput />
        <AddButton />
        <Todos />

      </div>
    </div>
  );
};

App.displayName = displayName;

const mapStateToProps = state => ({
  todos: state.todos.todos,
  error: state.onDataError.error,
});

const mapDispatchToProps = dispatch => ({
  onFetchInitData: () => {
    dispatch({ type: GET_INIT_DATA_ASYNC });
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default withStyles(styles)(withConnect);
