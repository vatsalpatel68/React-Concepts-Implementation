import React , { Component } from 'react';
class Counter extends Component{
    constructor(){
        super()
        this.state = {
            counter : 0,
        }
        this.changeNumber = this.changeNumber.bind(this);
    }
    changeNumber(){
      //  this.setState({
      //      counter : this.state.counter + 1
      //  })
      //  console.log(this.state.counter);
        this.setState(ps => ({
            counter:ps.counter + 1
        }))
    }
    changeNumberFive(){
        console.log("clicked");
        this.changeNumber();
        this.changeNumber();
        this.changeNumber();
        this.changeNumber();
        this.changeNumber();
    }


    componentDidMount()
    {
        console.log("component will be mounted");
    }

    componentDidUpdate()
    {
        console.log("component will be updated");
    }
    render(){
        return(
            <div>
                <h1>counter : {this.state.counter}</h1>
                <button onClick = {this.changeNumber} > INCREMENT </button>
            </div>
        )
    }
}

export default Counter;