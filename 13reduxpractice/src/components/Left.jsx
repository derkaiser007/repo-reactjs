import React from "react";
import { connect } from 'react-redux'
import { increment, decrement } from "../redux/Slice";

function Left({increment, decrement}) {
    return(
        <>
        <button className="left-btn" onClick={() => increment()}>Increment</button>
        <button className="left-btn" onClick={() => decrement()}>Decrement</button>
        </>
    )
}

export default connect(null, {increment, decrement})(Left)