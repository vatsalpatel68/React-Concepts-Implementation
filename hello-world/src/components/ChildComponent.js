import React from 'react'

function ChildComponent(props){
    return(
        <div>
            <button onClick = {() => {props.greet("son")}}>Greet parent</button>
            </div>
    )
}



export default ChildComponent;

