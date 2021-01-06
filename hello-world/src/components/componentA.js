import React from 'react';
import ComponentB from './componentB.js';
import {UserProvider , UserProvider2} from './Context.js';
class ComponentA extends React.Component{
    render(){
        return(
            <UserProvider value ="vatsal">
                <UserProvider2 value ='deep'>
                    <ComponentB />
                </UserProvider2>
            </UserProvider>
        )   
    }
}

export default ComponentA;