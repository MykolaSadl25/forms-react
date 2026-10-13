import { Component } from "react";

class UserList extends Component{
    render(){
        const {userData,onDelete}=this.props;
        return(
            <>
            <h2>List of Contacts</h2>
            <ul>{userData.map(({id,name,surname,email})=>{
        return (
          <li key={id}>
            <h2>{name}</h2>
            <p>{surname}</p>
            <p>{email}</p>
            <button type="button" onClick={()=>onDelete(id)}>Delete contact</button>
          </li>
        )
      })}</ul>
      </>
        )
    }
}

export default UserList