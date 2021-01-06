import React from 'react';
import ComponentC from './componentC.js';
class ComponentB extends React.Component{
    render(){
        return(
            <ComponentC />
        )
    }
}

export default ComponentB;