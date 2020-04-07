import React from 'react'

class CustomerForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.customer?props.customer.name:"",
            email:props.customer?props.customer.email:"",
            mobile:props.customer?props.customer.phone:""
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            name: this.state.name,
            email: this.state.email,
            phone:this.state.mobile
        }
        this.props.handleSubmit(formData)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/><br/>

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange}/><br/>
                    
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" name="mobile" id="mobile" value={this.state.mobile} onChange={this.handleChange}/><br/>
                    
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default CustomerForm