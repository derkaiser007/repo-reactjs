import React from "react";
import TodoElement from './TodoElement'
import { useSelector } from "react-redux";

export default function Todo() {
    const todos = useSelector(state => {
        console.log(state.todos)
        return state.todos
    })

    return(
        <>
        <div>
        {todos.todos.map((todo) => (
            <div key={todo.id}>
                <TodoElement todo={todo} />
            </div>
        ))}
        </div>
        </>
    )
}