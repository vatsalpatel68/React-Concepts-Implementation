import React from 'react';

function NameList2({person}){
    return(
        <div>
            <h1>My name is {person.name} and age is : {person.age}</h1>
        </div>
    )
}

export default NameList2;