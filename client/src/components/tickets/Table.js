import React from "react";
import {Link} from "react-router-dom"
function TicketTable(props) {
  console.log(props.tickets)
  return (
    <table border="1" cellPadding="1rem"> 
      <thead>
        <tr>
          <th>Code No</th>
          <th>Customer</th>
          <th>Department</th>
          <th>Employees</th>
          <th>Message</th>
          <th>Priority</th>
          <th>Actions</th>
          <th>Remove</th>
          <th>Complete</th>
        </tr>
      </thead>
      <tbody>
      {
        props.tickets&&props.tickets.map((ticket=>{
          return (
            <tr key={ticket._id}>
          <td>{ticket.code}</td>
          <td>{ticket.customer?ticket.customer.name:'NA'}</td>
          <td>{ticket.department.name}</td>
          <td>{ticket.employees.length===0?ticket.employees[0].name:ticket.employees.map(employee=>employee.name).join(', ')}</td>
          <td>{ticket.message}</td>
          <td>{ticket.priority}</td>
          <td>
            <button> <Link to={`/tickets/${ticket._id}`} >show </Link></button>
          </td>
          <td>
            <button onClick={()=>{props.handleremove(ticket._id)}}>remove</button>
          </td>
          <td>{ticket.isResolved? "Completed": "Not Completed"}</td>
        </tr>
          )
        }))
      }
      
        
      </tbody>
    </table>
  );
}

export default TicketTable;
