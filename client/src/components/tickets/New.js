import React from "react";

import axios from "../../config/axios";
import TicketForm from "./Form";
import MyContext from "../context/MyContext";

class TicketNew extends React.Component{
  constructor(){
    super()
    this.state={
      code:'',
      customer:'',
      department:'',
      employees:[],
      message:'',
      priority:''
    }
  }

  handleSubmit=(formData)=>{
    
    this.context.addTicket(formData)
    this.props.history.push("/tickets")
    window.location.reload()
  }

  render(){
    return(
      <div>
        <h2>Add Ticket</h2>
        <TicketForm handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

TicketNew.contextType = MyContext

export default TicketNew