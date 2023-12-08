import React from "react";
import { removeTodo } from "../features/todo/todoSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Todo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return(
        <>
        <div>Todos</div>
        {todos.map((todo) => (
            <li key={todo.id}>
                <h1>{todo.text}</h1>
                <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
            </li>
        ))
        }
        </>
    )
}