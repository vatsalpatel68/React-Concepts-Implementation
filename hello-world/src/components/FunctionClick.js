import React from 'react';


function FunctionClick(){

    
    return(
        <div>
            <button onClick = {clickFunc}>CLick from the function</button>


        </div>
        )
}
function clickFunc()
    {
        console.log("clicked");
    }

export default FunctionClick;