import {
    ADD_TODO,
    TOGGLE_TODO,
    INIT_DATA_SUCCESS
} from '../actions/actions';


export const initialTodoState = {
    todos: []
};

const todoApp = (state = initialTodoState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        userId: 1,
                        id: Date.now().toString(),
                        title: action.title,
                        completed: false
                    }
                ]
            };
        case INIT_DATA_SUCCESS:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    ...action.data
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if (action.id === index) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                })
            }
        default: {
            return {
                ...state
            }
        }
    }
};

export default todoApp;