import { Component } from "react";

class Text extends Component{
    render(){
        return(
            <p>Hi {this.props.name}</p>
        )
    }
}

export default Text