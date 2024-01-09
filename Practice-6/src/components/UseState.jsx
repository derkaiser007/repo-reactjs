import React, { useState } from "react";

export default function UseState() {
    let [counter, setCounter] = useState(0)

    return (
        <>
        {counter}
        <button onClick={() => setCounter(counter += 1)}>Increment</button> 
        <button onClick={() => setCounter(counter -= 1)}>Decrement</button>       
        </>
    )
}