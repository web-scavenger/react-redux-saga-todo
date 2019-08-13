import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { GET_INIT_DATA_ASYNC } from './actions/actions';

import { Condition } from './components/Condition'
import TodoInput from './components/TodoInput';

import config from './config';

const styles = theme => ({
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

class App extends Component {

  addTodoInput = React.createRef();

  componentDidMount() {
    this.props.onFetchInitData()
  }

  

  render() {
    const { classes } = this.props;
    return (
      <div className={classes['mainFragment']}>
        <div className={classes['container']}>
          <Condition value={!!this.props.error} message={null}>
            {this.props.error}
          </Condition>
          <TodoInput />
          <div>

            <ul>
              <Condition value={!!this.props.todos.length} message={'You have not any Todos'}>
                {this.props.todos.length && this.props.todos.map((todo) =>
                  <li key={todo.id}>{todo.title}</li>
                )}
              </Condition>

            </ul>
          </div>
        </div>

      </div>
    )
  }

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

