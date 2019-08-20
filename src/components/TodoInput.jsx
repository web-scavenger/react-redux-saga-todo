import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { ON_SUBMIT_INPUT, UPDATE_INPUT } from '../actions/actions';

import config from '../config';

const style = () => ({
  input: {
    width: 'calc(100% - 20px)',
    margin: '15px 5px',
    '&:focus': {
      outlineWidth: '0',
      // borderBottom: `2px solid ${config.colors.borderColorFocus}`,
    },
  },
});

const displayName = 'TodoInput';

const TodoInput = (props) => {
  const {
    classes, input, onChangeInput, onAddTodo,
  } = props;

  const changeHandler = ({ target: { value } }) => {
    onChangeInput(value);
  };

  const keyPressed = (e) => {
    if (e.key === 'Enter') {
      onAddTodo(input);
    }
  };

  return (
    <TextField
      type="text"
      className={classes.input}
      value={input}
      onChange={changeHandler}
      onKeyPress={keyPressed}
      label="Write your Todo"
      placeholder="I want to do"
    />
  );
};

TodoInput.displayName = displayName;

const mapStateToProps = state => ({
  input: state.input,
});

const mapDispatchToProps = dispatch => ({
  onAddTodo: (title) => {
    dispatch({ type: ON_SUBMIT_INPUT, title });
  },
  onChangeInput: (text) => {
    dispatch({ type: UPDATE_INPUT, text });
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(TodoInput);

export default withStyles(style)(withConnect);
