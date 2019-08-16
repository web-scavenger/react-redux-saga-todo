import { UPDATE_INPUT, CLEAR_INPUT } from '../actions/actions';


export const input = (state = '', action) => {
    switch(action.type){
        case UPDATE_INPUT: 
         return action.text
        case CLEAR_INPUT: 
            return ''
        default: 
            return state
    }
}