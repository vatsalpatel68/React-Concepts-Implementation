import React from 'react';
import { UserConsumer , UserConsumer2} from './Context.js';
class ComponentC extends React.Component{
    render(){
        return(
            <UserConsumer>
            {
                (upper) =>
                {
                    return(
                    <UserConsumer2>
                    {
                        (lower) =>{
                            return(<h1> {upper} and {lower}</h1>)
                        }
                    }
                    </UserConsumer2>
                    )
                }
            }
            </UserConsumer>
        )
    }
}

export default ComponentC;