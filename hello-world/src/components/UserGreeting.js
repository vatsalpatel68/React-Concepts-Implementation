import React , { Component } from 'react';

class UserGreeting extends Component{
    constructor(){
        super();
        this.state = {
            isLoggedIn : false
        }
     }
    
    render(){
        return(
                this.state.isLoggedIn ? <div> you are logged in.</div> :<div>you are not logged in.</div>
            // this.state.isLoggedIn && <div> you are logged in;</div>
        )        
    }
}

export default UserGreeting;