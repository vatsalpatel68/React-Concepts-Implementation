import React , { Component} from 'react';

class ClassClick extends Component{

    Clicked(){
        console.log("hello world");
    } 
    
    render()
    {
        return(
            <div>
                <button onClick = {this.Clicked}>Clicked from the class.</button>
            </div>
        )
    }
}

export default ClassClick;