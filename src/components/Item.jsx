import React, { Fragment } from 'react';

import config from '../config'
import { withStyles } from '@material-ui/core';


const styles = () => ({

})

const Item = (props) => {
    const { styles, item } = props;
    return(
        <Fragment>
            <div>
                {item.title}
            </div>
        </Fragment>
    )
}

export default withStyles(styles)(Item)