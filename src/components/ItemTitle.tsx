import React from 'react';
import Redux from 'redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { TOGGLE_TODO } from '../actions/actions';

import { TodoState } from '../reducers/todos';

import config from '../config';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    itemTitle: {
      padding: '5px',
      textAlign: 'left',
      cursor: 'pointer',
    },
    completed: {
      textDecoration: 'line-through',
      color: '#b5b5b5',
    },
  }),
);


const displayName = 'ItemTitle';

interface ItemTitleProps {
  item : TodoState
  onToggleTodo : any
}

const ItemTitle: React.SFC<ItemTitleProps> = (props) => {
  const { item, onToggleTodo } = props;

  const classes = useStyles();

  const onClick = (id: number | string) => {
    onToggleTodo(id);
  };


  const completed = item.completed ? classes.completed : null;

  return (
    <div
      className={`${classes.itemTitle} ${completed}`}
      onClick={() => onClick(item.id)}
    >
      {item.title}
    </div>
  );
};

ItemTitle.displayName = displayName;

const mapStateToProps = (state:any) => ({});

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>) => ({
  onToggleTodo: (id: string | number) => {
    dispatch({ type: TOGGLE_TODO, id });
  },
});

interface MapStateToPropsTypes {
  // Your properties here
}

interface MapDispatchToPropsTypes {
  onToggleTodo: (id: string | number) => void
}


const withConnect = connect<MapStateToPropsTypes, MapDispatchToPropsTypes>(
  mapStateToProps,
  mapDispatchToProps,
)(ItemTitle);

export default withConnect
