import React , { PureComponent } from 'react';

class PureComponent2 extends PureComponent{
    render(){
        console.log("from pure component");
        return(
        <h1>{this.props.index}</h1>
        )
    }
}

export default PureComponent2;