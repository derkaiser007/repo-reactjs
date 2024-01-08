import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import '../App.css'

export default function Entry() {
    const {input, setInput, addTodo} = useContext(TodoContext)

    function addTodoHandler(e) {
        e.preventDefault()
        if(!input) return
        addTodo(input)
        setInput('')
    }

    return(
        <>
        <form id="form-add" onSubmit={addTodoHandler}>
        <input 
        id="input-entry"
        type="text"
        placeholder="Add Todo..." 
        size={25}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        /> 
        <button id="button-add" type="submit">Add</button> 
        </form>      
        </>
    )
}