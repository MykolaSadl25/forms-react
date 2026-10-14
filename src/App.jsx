import { Component } from "react";
// import Form from "./component/Form";
// import UserList from "./component/UserList";
import ToDoList from "./component/ToDoList";
import Info from "./component/Info";
import Filter from "./component/Filter";
import ToDoEditor from "./component/TodoEditor";
import initialTodos from "./toDo.json"
import { nanoid } from "nanoid";

class App extends Component{
state={
    todos: initialTodos,
    filter: '',
  }

  handleData=(text)=>{
    const data={
      id:nanoid(5),
      text:text,
      completed:false,
    }

    this.setState((prev)=>({todos:[...prev.todos,data]}))
  }

  handleFilter=(text)=>{
    this.setState({
      filter:text
    })
  }

  handleDelete=(id)=>{
    this.setState((prev)=>({todos:prev.todos.filter(todo=>todo.id !== id)}))
  }

  render(){
    const {todos,filter}=this.state
    const filteredToDo = todos.filter((todo)=>todo.text.toLowerCase().includes(filter))
    
    const count = todos.length
    const completed = todos.filter((todo)=>todo.completed).length
    return(
      <>
      <Info quantity={count} completed={completed}/>
      <ToDoEditor onForm={this.handleData}/>
      <Filter onFilter={this.handleFilter}/>
      <ToDoList todos={filteredToDo} del={this.handleDelete}/>
      </>
    )
  }
}

export default App


      // {/* <Form onApp={this.handleApp}/>
      // // <UserList userData={this.state.userInfo} onDelete={this.handleDelete}/>

      //  state={
//     userInfo:[]
//   }
  

//   handleApp=(data)=>{
// console.log(data,"in App");
// // this.setState({
// //   userInfo:[data]
// // })
// this.setState((prev)=>({userInfo:[...prev.userInfo,data]}))
//   }


//   handleDelete=(id)=>{

//     this.setState((prev)=> ({userInfo:prev.userInfo.filter((user)=> user.id!==id)}))
//   }