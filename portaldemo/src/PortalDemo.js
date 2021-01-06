import React from 'react';
import ReactDOM from 'react-dom';

function PortalDemo(props){
    return ReactDOM.createPortal(
        <div className = 'portalContainer'>
            <div className = "text">
                <h1>Hello world</h1>
                <button onClick = {() => props.onClose()}>Close !</button>
            </div>
        </div>
    ,document.getElementById('root2'))
}

export default PortalDemo;
