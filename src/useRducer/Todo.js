import React from 'react'
import { ACTIONS } from './learnUseReducer'

const Todo = ({ aTodo, dispatch }) => {
    return (
        <div>
            <span style={{ color: aTodo.complete ? 'green' : 'red' }}>{aTodo.name}</span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payLoad: { id: aTodo.id } })}>TOGGLE</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payLoad: { id: aTodo.id } })}>DELETE</button>
        </div>
    )
}

export default Todo
