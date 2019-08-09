import { combineReducers } from 'redux';

import {
    VisibilityFilters,
} from '../actions/actions';

import{ todos } from './todos';
import onDataError from './error';

export default combineReducers({
    todos,
    onDataError
})