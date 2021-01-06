import React from 'react';
import UpdatedComponent from './UseCounter.js';
class HoverCounter extends React.Component{
    render(){
        const { counter,UpdateCounter} = this.props;
        return(
        <h1 onMouseOver = {UpdateCounter} >YOU HOVER ME { counter } TIME</ h1 >
        )
    }
}

export default UpdatedComponent(HoverCounter);
