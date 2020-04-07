import React from 'react'
import axios from '../../config/axios'
import isEmpty from 'lodash/isEmpty'

import TicketForm from './Form'

class TicketEdit extends React.Component{
    constructor(){
        super()
        this.state={
            ticket:{}
        }
    }

    componentDidMount(){
        const id= this.props.match.params.id
        axios.get(`/tickets/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const ticket =response.data
            this.setState({ticket})
        })
        .catch((err)=>{
            console.log(err)
        })

    }

    handleSubmit=(formData)=>{
        const id=this.props.match.params.id
        axios.put(`/tickets/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            //console.log(response.data)
            const ticket = response.data
            this.props.history.push(`/tickets/${ticket._id}`)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <h1>Edit Ticket</h1>
                {
                    !isEmpty(this.state.ticket)&&<TicketForm ticket={this.state.ticket} handleSubmit={this.handleSubmit}/>
                }
                
            </div>
        )
    }
}

export default TicketEdit