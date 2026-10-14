import { Component } from "react";

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
            <form onSubmit={this.handleSubmit}>
                <input onChange={(evt)=>this.setState({textValue:evt.target.value})} type="text" value={textValue}/>
                <button type="submit" >Create Task</button>
            </form>
            </>
        )
    }
}

export default ToDoEditor