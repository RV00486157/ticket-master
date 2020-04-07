import React from 'react'
import {Button} from 'react-bootstrap'
import axios from '../../config/axios'

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        const formData = {
            username: this.state.username, 
            email: this.state.email,
            password: this.state.password
        }
        //console.log(formData)
        axios.post('/users/register',formData)
            .then((response)=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }else{
                    this.props.history.push('/users/login')
                }
            })
            .catch((err)=>{
                console.log(err)
            })

    }

    render() {
        return (
            <div>
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange} /> <br/>

                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} /> <br />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} /> <br />

                    <Button variant="outline-primary" onClick={this.handleSubmit}>Register</Button>
                </form>
            </div>
        )
    }
}

export default Register