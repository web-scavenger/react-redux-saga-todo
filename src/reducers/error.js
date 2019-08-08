import {
    INIT_DATA_ERROR
} from '../actions/actions';


const onDataError = (state = false, action) => {
    switch (action.type) {
        case INIT_DATA_ERROR:
            return {
                ...state,
                error: action.message
            }

        default: {
            return {
                ...state
            }
        }
    }
};

export default onDataError;