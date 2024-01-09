import { useState, useEffect } from "react";
import TodoContext from "./TodoContext";

export default function TodoContextProvider({ children }){
    const [todoArray, setTodoArray] = useState([])

    const addTodo = (input) => {
        setTodoArray((prev) => [...prev, {id: Date.now(), todo: input}])
    }

    const removeTodo = (id) => {
        setTodoArray((prev) => prev.filter((todo) => todo.id !== id))
    }

    const updateTodo = (input) => {
        setTodoArray((prev) => prev.map((prevTodo) => prevTodo.id === input.id ? input : prevTodo))
    }

    useEffect(() => {
        const todoArray = JSON.parse(localStorage.getItem('todoArray')) 
        if(todoArray && todoArray.length > 0){
            setTodoArray(todoArray)
        }       
    }, [])

    useEffect(() => {
        localStorage.setItem('todoArray', JSON.stringify(todoArray))
    }, [todoArray])

    return(
    <TodoContext.Provider value={{todoArray, addTodo, removeTodo, updateTodo}}>
        { children }
    </TodoContext.Provider>
    )
}