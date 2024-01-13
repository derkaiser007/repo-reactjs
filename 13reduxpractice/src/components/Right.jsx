import React from "react";
import { connect } from 'react-redux'

function Right({count}) {
    return(
        <>
        {count}
        </>
    )
}

const mapStateToProps = (state) => ({
    count: state.counter.count, 
});

export default connect(mapStateToProps, null)(Right);