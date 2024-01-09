import React from "react";
import {useDispatch} from 'react-redux'
import {addTodo} from '../redux/todo/todoSlice'

export default function AddTodo() {
    const [input, setInput] = React.useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return(
        <form onSubmit={addTodoHandler}>
            <input 
            type="text"
            placeholder="add todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
}