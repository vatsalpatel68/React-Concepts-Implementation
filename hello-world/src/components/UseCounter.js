import React from 'react';

const UpdatedComponent = (OriginalComponent) =>{
    class NewComponent extends React.Component{

        constructor(){
            super();
            this.state = {
                counter : 0
            }
        }

        UpdateCounter = () =>{
            this.setState(ps => {
                return {counter : ps.counter + 1}
            })
        }
        render(){
            return(<OriginalComponent counter = {this.state.counter} UpdateCounter = {this.UpdateCounter}/>)
        }
    }
    return NewComponent;
}

export default UpdatedComponent;