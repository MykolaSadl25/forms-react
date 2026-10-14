import { Component } from "react";

class ToDoList extends Component{
    render(){
        const {todos,del}=this.props;
        return(
            <>
            <ul>{todos.map(({id,text,completed})=>{
                return <li style={{display:"flex",gap:10,justifyContent:"center"}} key={id}>
                    <input readOnly type="checkbox" checked={completed}/>
                    <p>{text}</p>
                    <button type="button" onClick={()=>del(id)}>Delete</button>
                </li>
            })}</ul>
            </>
        )
    }
}

export default ToDoList