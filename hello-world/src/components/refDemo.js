import React,{ Component } from 'react';

class RefDemo extends Component{
    constructor()
    {
        super();
        this.sampleref = React.createRef();
    }

    focuson = () => {
        this.sampleref.current.focus();
    }

    render(){
        return(
            <input type='text' ref = {this.sampleref} onClick={this.focuson}/>
            )
    }
}

export default RefDemo;