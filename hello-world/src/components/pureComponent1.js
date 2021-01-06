import React , { Component } from 'react';
import PureComponent2 from './pureComponent2.js';
import PureComponent3 from './pureComponent3.js';
class PureComponent1 extends Component{
    constructor(){
        super();
        this.state = 
        {
            index :0
        }
    }

    componentDidMount(){
        setInterval((ps) => {this.setState({
            index : this.state.index + 1
        })},1000);
    }
    render(){
        console.log("from parent component");
        return(
            <div>
            <PureComponent2  index = {this.state.index}/>
            <PureComponent3  index = {this.state.index}/>
            </div>
        )
    }

}

export default PureComponent1;