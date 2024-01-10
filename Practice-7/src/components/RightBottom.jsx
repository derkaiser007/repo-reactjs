import React from "react";
import { useSelector } from "react-redux";

export default function() {
    const state = useSelector(state => {
        console.log(state.counter)
        return state
    })

    return(
        <>
        {state.counter.count}
        </>
    )
}