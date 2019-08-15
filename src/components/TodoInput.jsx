import React, { Fragment, useRef } from "react";
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { ADD_TODO } from '../actions/actions';

import config from '../config'

const style = (theme) => ({
    input: {
        width: 'calc(100% - 20px)',
        padding: '10px 5px',
        textAlign: 'center',
        margin: '15px 5px',
        border: 'none',
        borderBottom: `2px solid ${config.colors.borderColor}`,
        backgroundColor: config.colors.bgGray,
        color: config.colors.mainLightColor,
        transition: 'all 0.5s ease-out',
        '&:focus': {
            outlineWidth: '0',
            borderBottom: `2px solid ${config.colors.borderColorFocus}`,
        }
    },
    button:{
        width: 'calc(100% - 10px)',
        padding: '10px 0px',
        margin: '15px 5px',
        border: `2px solid ${config.colors.borderColor}`,
        backgroundColor: config.colors.bgGray,
        color: config.colors.mainLightColor,
        cursor: 'pointer',
        transition: 'all 0.5s ease-out',
        '&:hover': {
            outlineWidth: '0',
            border: `2px solid ${config.colors.borderColorFocus}`,
            backgroundColor: config.colors.borderColorFocus,
        }
    }

})

const TodoInput = ({ classes, onAddTodo }) => {

    let todoInput = useRef();

    const addTodo = () => {
        const value = todoInput.current.value
        onAddTodo(value);
        todoInput.current.value = '';
    }

    const keyPressed = (e) => {
        if (e.key === "Enter") {
            addTodo()
        }
    }
    return (
        <Fragment>
            <input className={classes.input} type="text" ref={todoInput} onKeyPress={keyPressed} />
            <button className={classes.button} onClick={addTodo} >ADD TODO</button>
        </Fragment>
    )
};

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodo: (title) => {
            dispatch({ type: ADD_TODO, title })
        }
    }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)(TodoInput)

export default withStyles(style)(withConnect)