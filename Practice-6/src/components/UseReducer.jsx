import React, { useReducer } from 'react'

function counterReducer(state, action) {
    switch(action.type) {
        case 'Increment':
            return {count: state.count + 1}
        case 'Decrement':
            return {count: state.count - 1}
        default:
            return state
    }
}

export default function UseReducer() {
    const [state, dispatch] = useReducer(counterReducer, {count: 0})

    const increment = () => {
        dispatch({type: 'Increment'})
    }

    const decrement = () => {
        dispatch({type: 'Decrement'})
    }

    return(
        <>
          {state.count}
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </>
    )
}