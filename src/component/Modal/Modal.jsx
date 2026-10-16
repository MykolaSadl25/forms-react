import { Component } from "react";

import style from "./Modal.module.css"

class Modal extends Component{

    state={
        name:"",
    }

    handleSubmit=(evt)=>{
        evt.preventDefault()

        this.props.handleModal(this.state.name)

        this.setState({
            name:""
        })
        
    }


    render(){
        return(
            <div className={style.backdrop}>
                <div className={style.modal}>
                    <form onSubmit={this.handleSubmit}>
                        <input className={style.input} placeholder="Enter your name" type="text" onChange={(evt)=>this.setState({name:evt.target.value})} value={this.state.name}/>
                        <button className={style.button} type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Modal