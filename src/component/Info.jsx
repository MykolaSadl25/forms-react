import { Component } from "react";

class Info extends Component{
    render(){
        const {quantity,completed} = this.props
        return(
            <>
            <p>Task quantity:{quantity}</p>
            <p>Completed:{completed}</p>
            </>
        )
    }
}

export default Info