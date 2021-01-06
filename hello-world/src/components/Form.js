import React , { Component } from 'react'

class Form extends Component{
    constructor(){
        super();
        this.state = {
            username : "",
            text : ''        }
        this.changeUserName = this.changeUserName.bind(this);
    }

    changeUserName(event)
    {
        this.setState({
            username : event.target.value
        })
    }
    changeText = event => {
        this.setState({
            text : event.target.value
        })
    }
    submitForm = event =>{
      alert(this.state.username);
      event.preventDefault();

    }

    render(){
        return(
            <div>
                <form onSubmit ={this.submitForm}>
                    username:<input type="text" value ={this.state.username} onChange = {this.changeUserName} placeholder="USERNAME"/>
                    <br />
                    text:<input type ="text" value ={this.state.text} onChange = {this.changeText} placeholder = 'COMMENTS'/>
                    <br /> 
                    <input type="submit"/>

                </form>
            </div>
        )
    }
}

export default Form;