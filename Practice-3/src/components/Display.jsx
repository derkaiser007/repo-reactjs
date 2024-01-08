import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import Element from "./element";
import '../App.css'

export default function Display() {
    const {todoArray} = useContext(TodoContext)

    return(
        <>
        <div id="display-table">
        {todoArray.map((todo) => (
            <div key={todo.id}>
                <Element todo={todo} />
            </div>
        ))}
        </div>             
        </>
    )
}