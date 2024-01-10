import React, { useState, useEffect } from "react";
import { removeTodo, updateTodo } from "../redux/todo/todoSlice";
import { useDispatch } from "react-redux";

export default function TodoElement({todo}) {
    const [elementChangeBoolean, setElementChangeBoolean] = useState(false)
    const [element, setElement] = useState(todo.text)
    const dispatch = useDispatch()

    return(
        <>
        <div onClick={() => setElementChangeBoolean(true)}>
            {
            (elementChangeBoolean) 
            ? 
            (<>
            <input 
            type="text" 
            size={30}
            value={element}
            onChange={(e) => setElement(e.target.value)}
            />
            <button onClick={
                async () => {
                    await dispatch(updateTodo({id: todo.id, text: element}))
                    setElementChangeBoolean(false)
                }
                }>Update</button>
            </>) 
            : 
            todo.text
            }
        </div>
        <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
        </>
    )

}









