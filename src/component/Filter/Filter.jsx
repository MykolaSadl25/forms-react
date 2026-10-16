import { Component } from "react";
import { Input } from "../Filter/Filter.styled";
class Filter extends Component{
    render(){
        const {onFilter}=this.props
        return(
            <>
            <Input type="text" placeholder="Filter your tasks" onChange={(evt)=>onFilter(evt.target.value)}/>
            </>
        )
    }
}

export default Filter