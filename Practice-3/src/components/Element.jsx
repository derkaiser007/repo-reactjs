import { useState, useContext, useEffect } from "react";
import TodoContext from "../context/TodoContext";
import '../App.css'

export default function Element({ todo }) {
    const {removeTodo, updateTodo} = useContext(TodoContext)
    const [elementChangeBoolean, setElementChangeBoolean] = useState(false)
    const [element, setElement] = useState(todo.todo)

    const editTodo = async(e) => {
        e.preventDefault();
        await updateTodo({ ...todo, todo: element });        
        setElementChangeBoolean(false);        
    };

    useEffect(() => {
        console.log('Element Change Boolean:', elementChangeBoolean);
    }, [elementChangeBoolean]);

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
                size={30}
                value={element}
                onChange={(e) => setElement(e.target.value)}
                />
                <button id="button-update" onClick={editTodo}>Update</button>
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