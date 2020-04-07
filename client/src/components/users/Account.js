import React, { Fragment } from 'react'
import axios from '../../config/axios'

class Account extends React.Component{
    constructor(){
        super()
        this.state ={
            user: '',
            tickets: '',
            employees: '',
            departments: '',
            customers: ''
        }
    }

    componentDidMount(){
        axios.get('/users/account',({
            headers:{
                'x-auth': localStorage.getItem('authToken')
            }
        }))
            .then(response=>{
                
                this.setState({
                    user: response.data.user, tickets: response.data.tickets, employees:response.data.employees, departments: response.data.departments, customers:response.data.customers
                })
            })
            .catch(err=>{
                console.log(err)
            })
    }
    
    render(){
        const user = this.state.user

        return(
            <Fragment>
                <h2>User Details</h2>
                <ul>
                    <li>Username: {user.username}</li>
                    <li>Email: {user.email}</li>
                </ul>
                
                <h3>Customer Details of the user</h3>
                <ul>
                    {this.state.customers&&
                           this.state.customers.map(customer=>{
                                return <li key={customer._id}>{customer.name} </li>
                           })
                    }
                </ul>
                <h3>Department Details of the user</h3>
                <ul>
                    {this.state.departments&&
                           this.state.departments.map(department=>{
                                return <li key={department._id}>{department.name}</li>
                           })
                    }
                </ul>
                <h3>Employee Details of the user</h3>
                <ul>
                    {this.state.employees&&
                           this.state.employees.map(employee=>{
                           return <li key={employee._id}>{employee.name}</li>
                           })
                    }
                </ul>
                <h3>Tickets Raised by the user</h3>
                <ul>
                    {this.state.tickets&&
                           this.state.tickets.map(ticket=>{
                                return <li key={ticket._id}>{ticket.code}</li>
                           })
                    }
                </ul>
                <br/>
            </Fragment>
        )
    }
}

export default Account