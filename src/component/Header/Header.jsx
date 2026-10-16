import { Component } from "react";
import Modal from "../Modal/Modal";
import Text from "../Text/Text";
import { Head,Btn,Logo } from "./Header.styled";


class Header extends Component{

    state={
        name:"",
        isOpen:false,
    }

    handleHeaderSubmit = (text)=>{
        this.setState({
            name:text,
            isOpen:false,
        })

    }

    handleModalOpen=()=>{
        this.setState((prev)=>({isOpen:!prev.isOpen}))
    }

    render(){
        
        return<>
        <Head>
            <a href="#"><Logo src={this.props.logo} alt="" /></a>
            {this.state.name?<Text name={this.state.name}/>:<Btn type="button" onClick={this.handleModalOpen}>Sign In</Btn>}
            {this.state.isOpen && <Modal handleModal={this.handleHeaderSubmit}/>}
        </Head>
        </>
    }
}

export default Header