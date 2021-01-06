import React from 'react';

function NameList3(){
    const names = ['vatsal','deep','vatsal ']
    const name  = names.map((n) => <h1 key ={n}>{n}</h1>)
    return(
        <div>
            {name}
        </div>
    )
}

export default NameList3;