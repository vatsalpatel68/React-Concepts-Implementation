import React, { Component } from 'react';
import ChildComponent from './ChildComponent.js';

class ParentComponent extends Component{
    constructor(){
        super();
        this.state = {
            Name : "vatsal"
        }

        this.greetFromParent = this.greetFromParent.bind(this);
    }
    greetFromParent(fromChild){
        console.log(`the parent is ${this.state.Name} and ${fromChild}`);
    }
    render(){
        return(
            <div>
                <ChildComponent greet = {this.greetFromParent} />
            </div>
        )
    }
}
export default ParentComponent;



