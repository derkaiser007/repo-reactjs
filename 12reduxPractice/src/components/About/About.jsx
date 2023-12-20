import React from "react";
import { connect } from 'react-redux'


function About({value}){
    console.log(value);

    return(
        <>
        <p>About</p>
        <p>Value: {value.info}</p>
        </>        
    )
}

const mapStateToProps = (state) => ({
    value: state.value,
  });
  
export default connect(mapStateToProps)(About);