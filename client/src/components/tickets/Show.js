import React, { Fragment } from "react"
import isEmpty from "lodash/isEmpty"
import { Link } from "react-router-dom"

import MyContext from "../context/MyContext"

function TicketShow(props){

        let ticket;
        return(
            <MyContext.Consumer>
                {
                    context=>
                    (
                        <Fragment>
                            <h1>Ticket Details</h1>
                            {
                                isEmpty(context.tickets)?(
                                    <div>
                                        <p>loading...</p>
                                    </div>
                                ):(
                                    <div>
                                        {
                                            context.tickets.map(ticket=>{
                                                if(ticket._id==props.match.params.id){
                                                    return(
                                                        <Fragment>
                                                        <p>Code: {ticket.code}</p>
                                                        <p>Customer: {ticket.customer.name}</p>
                                                        <p>Department: {ticket.department.name}</p>
                                                        <p>Message: {ticket.message}</p>
                                                        <p>Priority: {ticket.priority}</p>
                                                        <p>Status: {ticket.isResolved?'Completed':(
                                                        <>
                                                        'Incomplete'
                                                        <button onClick={()=>context.editTicket(ticket._id)}>edit</button></>)} </p>
                                                        {/* <p><Link to={`/tickets/edit/${ticket._id}`}>Edit Ticket</Link></p> */}
                                                        </Fragment>
                                                    )
                                                }
                                                })
                                        }
                                    </div>
                                )
                            }
                        </Fragment>
                    )
                }
                
        
            </MyContext.Consumer>
        )

}

export default TicketShow