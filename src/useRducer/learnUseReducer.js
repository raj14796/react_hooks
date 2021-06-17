import React, { useReducer, useState } from 'react'
import Todo from './Todo'

export const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    DELETE_TODO: 'DELETE_TODO'
}

const reducerFunction = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            //console.log("newTodo : ",newTodo(action.payLoad.name))
            return [...todos, newTodo(action.payLoad.name)]
        case ACTIONS.TOGGLE_TODO:
            console.log("TOGGLE")
            return todos.map((aTodo) => aTodo.id === action.payLoad.id ? { ...aTodo, complete: !aTodo.complete } : aTodo)
        case ACTIONS.DELETE_TODO:
            return todos.filter((aTodo) => aTodo.id !== action.payLoad.id)
        default: return todos;
    }
}

const newTodo = (name) => {
    return { id: Date.now(), name: name, complete: false }
}

const LearnUseReducer = () => {

    const [todos, dispatch] = useReducer(reducerFunction, [])
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, payLoad: { name: name } })
        console.log(todos)
        setName('')
    }

    return (
        <>
            <h1>useReducer Hook</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder="press enter after entering data" style={{width:"20%"}} />
            </form>
            {todos.map((aTodo) => (
                <Todo key={aTodo.id} aTodo={aTodo} dispatch={dispatch} />
            ))}
        </>
    )
}

export default LearnUseReducer
