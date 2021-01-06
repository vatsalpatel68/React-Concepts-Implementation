import React from 'react';

function memoComponent(props){
    return(
        <h1>{props.name}</h1>
    )
}
export default React.memo(memoComponent);