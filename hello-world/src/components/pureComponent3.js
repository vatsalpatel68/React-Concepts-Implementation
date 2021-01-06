import React , { Component } from 'react';

class PureComponent3 extends Component{
    render(){
        console.log("from simple component.");
        return(
        <h1>{this.props.index}</h1>
        )
    }
}

export default PureComponent3;
