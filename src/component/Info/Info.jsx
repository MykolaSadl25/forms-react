import { Component } from "react";
import { Wrapping } from "./Info.styled";

class Info extends Component{
    render(){
        const {quantity,completed} = this.props
        return(
            <>
            <h2>At a glance</h2>
            <Wrapping>
             <p>Task to do: {quantity}</p>
             <p>Completed: {completed}</p>
            </Wrapping>
            </>
        )
    }
}

export default Info