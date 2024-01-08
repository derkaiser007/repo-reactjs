import { useState, useContext, useEffect } from "react";
import TodoContext from "../context/TodoContext";
import '../App.css'

export default function Element({ todo }) {
    const {removeTodo, updateTodo} = useContext(TodoContext)
    const [elementChangeBoolean, setElementChangeBoolean] = useState(false)
    const [element, setElement] = useState(todo.todo)

    useEffect(() => {setElementChangeBoolean(false)}, [updateTodo])

    return(
        <>
        <div className="element">
            <div id="elementary" onClick={() => setElementChangeBoolean(true)}>
                {
                (elementChangeBoolean) 
                ? 
                (<>
                <input 
                id="input-update"
                type="text" 
                value={element}
                onChange={(e) => setElement(e.target.value)}
                />
                <button id="button-update" onClick={() => updateTodo({...todo, todo: element})}>Update</button>
                </>) 
                : 
                todo.todo
                }
            </div>
            <button id="button-remove" onClick={() => removeTodo(todo.id)}>Remove</button>                
        </div>
        </>
    )
}