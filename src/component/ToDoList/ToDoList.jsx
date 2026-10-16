import { Component } from "react";
import { Btn } from "./ToDoList.styled";
class ToDoList extends Component{
    render(){
        const {todos,del,handleCompleted}=this.props;
        return(
            <>
            <div>
                <h2>To do List</h2>
                <ul style={{display:"flex",gap:10,justifyContent:"center", flexDirection:"row", flexWrap:"wrap"}}>{todos.map(({id,text,completed})=>{
                return <li style={{display:"flex",gap:10,justifyContent:"center", alignItems:"center"}} key={id}>
                    <input onChange={()=>handleCompleted(id)} type="checkbox" checked={completed}/>
                    <p>{text}</p>
                    <Btn type="button" onClick={()=>del(id)}>Delete</Btn>
                </li>
            })}</ul>
            </div>
            </>
        )
    }
}

export default ToDoList