import { Component } from "react";
import { nanoid } from "nanoid";
class Form extends Component{

    state={
        name:"",
        surname:"",
        email:"",
    }

    handleSubmit=(evt)=>{
        evt.preventDefault()
        const {name,surname,email}=this.state
        const data={
            id: String(Date.now()),
            name,
            surname,
            email,
        }
        this.props.onApp(data)
        
        this.setState({
            name:"",
            surname:"",
            email:"",
        })
    }

    handleInput= (evt)=>{
        const {name,value}=evt.target
        this.setState({
            [name]:value
        })
    }

   

    render(){
        const {name,surname,email}=this.state
        const formID = nanoid(5)
        const nameId = nanoid(5)
        const surnameId = nanoid(5)
        const emailId = nanoid(5)
        return(
            <>
            <form onSubmit={this.handleSubmit} id={formID}>
                <label htmlFor={nameId}> Enter your name</label>
                <input onChange={this.handleInput} value={name} id={nameId} type="text" name="name" placeholder="Enter your name"/>
                <label htmlFor={surnameId}> Enter your surname</label>
                <input onChange={this.handleInput} value={surname} id={surnameId} type="text" name="surname" placeholder="Enter your surname"/>
                <label htmlFor={emailId}> Enter your email</label>
                <input onChange={this.handleInput} value={email} id={emailId} type="email" name="email" placeholder="Enter your email"/>
                <button type="submit">send</button>
            </form>
            </>
        )
    }
}
export default Form


    // handleSubmit=(evt)=>{
    //     evt.preventDefault()
    //     // 1
    //     // console.log(evt.currentTarget.elements[0].value);
    //     // console.log(evt.currentTarget.elements[1].value);
    //     // console.log(evt.currentTarget.elements[2].value);

    //     // 2
    //     // console.log(evt.currentTarget.elements.name.value);
    //     // console.log(evt.currentTarget.elements.surname.value);
    //     // console.log(evt.currentTarget.elements.email.value);
    //     const data={
    //         name:evt.currentTarget.elements.name.value,
    //         surname:evt.currentTarget.elements.surname.value,
    //         email:evt.currentTarget.elements.email.value,
    //     }

    //     evt.currentTarget.reset()

    //     }

//  handleCheckBox = ()=>{
    //     const {agree}=this.setState
    //     this.setState({
    //         agree:!agree,
    //     })
    // }


    // <label>HTML
                    {/* <input onChange={this.handleInput} checked={course === "html"} value="html" type="radio" name="course"/>
                </label>
                <label>CSS
                    <input onChange={this.handleInput} checked={course === "css"} value="css" type="radio" name="course"/>
                </label>
                <label>Javascript
                    <input onChange={this.handleInput} checked={course === "javascript"} value="javascript" type="radio" name="course"/>
                </label>
                <input type="checkbox" onChange={this.handleCheckBox} checked={agree}/> */}