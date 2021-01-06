import React from 'react';
import NameList2 from "./NameList2.js";

function NameList(){
    const name = [
        {
            name : "vatsal",
            age : 21
        },
        {
            name : "deep",
            age :22
        }
    ]
    const names = name.map(person => <NameList2 person = {person}  />);

    return(
        <div>
            {names}

        </div>
    )
}

export default NameList;