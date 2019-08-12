import React, { Fragment, Component } from 'react';

import { connect } from 'react-redux';
import { ADD_TODO, GET_INIT_DATA_ASYNC } from './actions/actions';

import { Condition } from './components/Condition'


class App extends Component {

  addTodoInput = React.createRef();

  componentDidMount() {
    this.props.onFetchInitData()
  }
	//test coment for test commit
  addTodo = () => {
    const { value } = this.addTodoInput;
    this.props.onAddTodo(value);
    this.addTodoInput.value = ''
  }

  keyPressed = (e) => {
    if (e.key === "Enter") {
      this.addTodo()
    }
  }

  render() {
    return (
      <Fragment>
        <div>{this.props.error}</div>
        <div>
          <input type="text" ref={input => this.addTodoInput = input} onKeyPress={this.keyPressed} />
          <button onClick={this.addTodo} >ADD TODO</button>
        </div>
        <div>

          <ul>
            <Condition value={!!this.props.todos.length} message={'You have not any Todos'}>
              {this.props.todos.length && this.props.todos.map((todo) =>
                <li key={todo.id}>{todo.title}</li>
              )}
            </Condition>

          </ul>
        </div>
      </Fragment>
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
    onAddTodo: (title) => {
      dispatch({ type: ADD_TODO, title })
    },
    onFetchInitData: () => {
      dispatch({ type: GET_INIT_DATA_ASYNC })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps

)(App)

