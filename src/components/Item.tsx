import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import RemoveItemBtn from './RemoveItemBtn';
import ItemTitle from './ItemTitle';

import { TodoState } from '../reducers/todos';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      padding: '5px',
      textAlign: 'left',
      borderBottom: '1px solid #b5b5b5',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '&:last-child': {
        borderBottom: 'none',
      },
  
    },
    completed: {
      textDecoration: 'line-through',
      color: '#b5b5b5',
    },
  }),
);

interface ItemProps {
  item : TodoState
}


const displayName = 'Item';

const Item: React.SFC<ItemProps> = (props) => {
  const { item } = props;
  const classes = useStyles();

  return (
    <div className={classes.item}>
      <ItemTitle item={item} />
      <RemoveItemBtn id={item.id} />
    </div>
  );
};

Item.displayName = displayName;

export default Item;
