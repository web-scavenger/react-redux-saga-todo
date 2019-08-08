import React, {Fragment, Component} from 'react';

import { connect } from 'react-redux';
import { ADD_TODO_ASYNC, GET_INIT_DATA_ASYNC } from './actions/actions';


class App extends Component{

  addTodoInput = React.createRef();

  componentDidMount(){
    this.props.onFetchInitData()
  }

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

  render(){
    console.log(this.props)
    return(
      <Fragment>
        <div>{this.props.error}</div>
          <div>
            <input type="text" ref={input => this.addTodoInput = input} onKeyPress={this.keyPressed}/>
            <button onClick={this.addTodo} >ADD TODO</button>
          </div>
          <div>
            
            <ul>
              {this.props.todos.map((todo) =>
                <li key={todo.id}>{todo.title}</li>
              )}
            </ul>
          </div>
      </Fragment>
    )
  }
  
}


const mapStateToProps = (state) => {
  return{
    todos: state.todos,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onAddTodo: (title) => {
      dispatch({type: ADD_TODO_ASYNC, title})
    },
    onFetchInitData: () => {
      dispatch({type: GET_INIT_DATA_ASYNC})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps

)(App)

