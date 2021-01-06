import React  from 'react';
import ReactDOM from 'react-dom';
import PortalComponent from './PortalComponent.js';

function PortalDemo(){
    return ReactDOM.createPortal(
        <React.Fragment><PortalComponent/></React.Fragment>
    ,document.getElementById('root-portle'))
}

export default PortalDemo;