import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { GET_INIT_DATA_ASYNC } from './actions/actions';

import { Condition } from './components/Condition'
import TodoInput from './components/TodoInput';
import Todos from './components/Todos';
import AddButton from './components/AddButton';

import config from './config';

const styles = () => ({
  "mainFragment": {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: config.colors.bgGray,
    color: config.colors.mainLightColor
  },
  'container': {
    width: '70%',
  },
});

const App = ( props ) => {
  const { onFetchInitData, classes, error } = props;

  useEffect(() => {
    onFetchInitData()
  });

  return(
    <div className={classes['mainFragment']}>
        <div className={classes['container']}>
          <Condition value={!!error} message={null}>
            {error}
          </Condition>

          <TodoInput />
          <AddButton />
          <Todos />

        </div>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
    error: state.onDataError.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchInitData: () => {
      dispatch({ type: GET_INIT_DATA_ASYNC })
    }
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default withStyles(styles)(withConnect)

