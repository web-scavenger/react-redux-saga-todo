import {
    INIT_DATA_ERROR
} from '../actions/actions';


const onDataError = (state = {error: null}, action) => {
    switch (action.type) {
        case INIT_DATA_ERROR:
            return {
                error: action.message
            }

        default: {
            return state
        }
    }
};

export default onDataError;