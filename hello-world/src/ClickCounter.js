import React from 'react';
import UpdatedComponent from './UseCounter.js';
class ClickCounter extends React.Component{
    render(){
        const{counter,UpdateCounter} = this.props;
        return(
        <button onClick = {updateCounter}>you clicked me {Counter} Time</button>
        )
    }
}

export default UpdatedComponent(ClickCounter);
