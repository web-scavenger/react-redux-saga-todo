import React from 'react';
import { connect } from 'react-redux';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core';

import { REMOVE_TODO } from '../actions/actions';

const styles = theme => ({

});

const displayName = 'RemoveItemBtn';

const RemoveItemBtn = (props) => {
  const { classes, onRemove, id } = props;

  const onClick = (elementId) => {
    onRemove(elementId);
  };

  return (
    <IconButton aria-label="delete" onClick={() => onClick(id)}>
      <DeleteIcon />
    </IconButton>
  );
};

RemoveItemBtn.displayName = displayName;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onRemove: (id) => {
    dispatch({ type: REMOVE_TODO, id });
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RemoveItemBtn);

export default withStyles(styles)(withConnect);
