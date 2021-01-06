import React ,{ Component } from 'react';

class Welcome extends Component {
    constructor(){
        super();
        this.state = {
            message:"Please,press the button!"
        }
    }
    
    changeText(){
        this.setState({
            message:"Thanks for the press the button!"
        })
    }
    render(){
        return (
        <div>
        <h1>{this.state.message}</h1>
        <button onClick = {() => this.changeText()} >click me!</button>
        </div>
        )
    }
}

export default Welcome;