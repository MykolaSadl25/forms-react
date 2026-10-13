import { Component } from "react";
import Form from "./component/Form";
import UserList from "./component/UserList";
class App extends Component{

  state={
    userInfo:[]
  }
  

  handleApp=(data)=>{
console.log(data,"in App");
// this.setState({
//   userInfo:[data]
// })
this.setState((prev)=>({userInfo:[...prev.userInfo,data]}))
  }


  handleDelete=(id)=>{

    this.setState((prev)=> ({userInfo:prev.userInfo.filter((user)=> user.id!==id)}))
  }

  render(){
    console.log(this.state.userInfo);
    
    return(
      <>
      <Form onApp={this.handleApp}/>
      <UserList userData={this.state.userInfo} onDelete={this.handleDelete}/>
      </>
    )
  }
}

export default App