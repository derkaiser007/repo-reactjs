import {createSlice, nanoid} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [{id:1, text:'Hello World'}],
    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => (todo.id !== action.payload))
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((prev) => prev.id === action.payload.id ? action.payload : prev)
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export const todoReducer = todoSlice.reducer