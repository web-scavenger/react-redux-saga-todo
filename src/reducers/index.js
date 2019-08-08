import { combineReducers } from 'redux';

import {
    VisibilityFilters,
} from '../actions/actions';

import todoApp from './todos';
import onDataError from './error';


export const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: [],
    error: null
}

export default combineReducers({
    todoApp,
    onDataError
})