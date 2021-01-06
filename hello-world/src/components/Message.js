import React,{ Component }from 'react';


class Message extends Component{

    render(){
        const {name} = this.props;
    return <p> `Message from ${name}`</p>;
    }

}


export default Message;