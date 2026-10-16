import { Component } from "react";
import {Form, Input, Btn } from "./ToDoEditor.styled";

class ToDoEditor extends Component{
    state={
        textValue: '',
    }
    handleSubmit=(evt)=>{
        evt.preventDefault()
        const {onForm}=this.props
        const {textValue} = this.state;
        
        onForm(textValue)

        this.setState({
            textValue:""
        })
    }

    
    render(){
        const {textValue} = this.state;
        return(
            <>
            <Form onSubmit={this.handleSubmit}>
                <Input placeholder="Write what you need to do" onChange={(evt)=>this.setState({textValue:evt.target.value})} type="text" value={textValue}/>
                <Btn type="submit" >Create Task</Btn>
            </Form>
            </>
        )
    }
}

export default ToDoEditor