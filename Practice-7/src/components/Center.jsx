import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/Slice'

export default function Center() {
    const dispatch = useDispatch()

    return(
        <>
        <div className="center-part">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
        </>
    )
}