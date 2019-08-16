import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core';

import config from '../config'


const styles = () => ({

})

const Item = (props) => {
    const { styles, item } = props;
    return(
        <Fragment>
                {item.title}
        </Fragment>
    )
}

export default withStyles(styles)(Item)