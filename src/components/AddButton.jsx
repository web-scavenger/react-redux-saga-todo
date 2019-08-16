import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { ON_SUBMIT_INPUT } from '../actions/actions';

import config from '../config';


const styles = () => ({
  button: {
    width: 'calc(100% - 10px)',
    padding: '10px 0px',
    margin: '15px 5px',
    border: `2px solid ${config.colors.borderColor}`,
    backgroundColor: config.colors.bgGray,
    color: config.colors.mainLightColor,
    cursor: 'pointer',
    transition: 'all 0.5s ease-out',
    '&:hover': {
      outlineWidth: '0',
      border: `2px solid ${config.colors.borderColorFocus}`,
      backgroundColor: config.colors.borderColorFocus,
    },
  },
});

const displayName = 'AddButton';

const AddButton = (props) => {
  const { classes, onAddTodo, input } = props;

  const addTodo = () => {
    onAddTodo(input);
  };

  return <button className={classes.button} type="button" onClick={addTodo}>ADD TODO</button>;
};

AddButton.displayName = displayName;

const mapStateToProps = state => ({
  input: state.input,
});

const mapDispatchToProps = dispatch => ({
  onAddTodo: (title) => {
    dispatch({ type: ON_SUBMIT_INPUT, title });
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddButton);

export default withStyles(styles)(withConnect);
