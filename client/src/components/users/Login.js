import React from 'react' 
import { Button } from 'react-bootstrap'
import axios from '../../config/axios'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
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
            email: this.state.email,
            password: this.state.password
        }
        console.log(formData)
        axios.post('/users/login',formData)
            .then((response)=>{
                if(response.data.hasOwnProperty("errors")){
                    window.alert(response.data.error)
                }else{
                    const { token } = response.data
                    if(token){
                        localStorage.setItem('authToken',token)
                        this.props.history.push('/')
                        window.location.reload()
                    }else{
                        alert('Invalid email/password')
                    }
                    
                }
            }).catch(err=>{
                alert('Something went wrong')
            })
      
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                  
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} /> <br />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} /> <br />

                    <Button variant="outline-primary" onClick={this.handleSubmit}>Login</Button>
                </form>
            </div>
        )
    }
}

export default Login