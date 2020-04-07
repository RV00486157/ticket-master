import React from "react";
import { Chart } from "react-google-charts";
import {Link} from "react-router-dom"

import MyContext from "../context/MyContext"
import TicketTable from "./Table";

class TicketsList extends React.Component {
  constructor() {
    super();
    this.state = {
      tickets: [],
      departments:[]
    };
  }

  componentDidMount() {
    this.setState({
      tickets:this.context.tickets,
      departments:this.context.departments
    })
  }

  render() {
    const { tickets } = this.context;
    let ticketPriorityHigh,ticketPriorityLow,ticketPriorityMedium;
    if(tickets){
      ticketPriorityHigh = tickets.filter(
        ticket => ticket.priority === "high"
      ).length;
      ticketPriorityMedium = tickets.filter(
        ticket => ticket.priority === "medium"
      ).length;
      ticketPriorityLow = tickets.filter(ticket => ticket.priority === "low")
        .length;

        const departments = this.state.departments.filter((department)=>{
          return tickets.find((ticket)=>ticket.department===department._id)
        })
    }
    
      
    
    return (
      <div>
        <h1>Tickets List</h1>
        
        
           <TicketTable tickets={tickets} handleremove={this.context.removeTicket}/>
        <Link to="/tickets/new">Add New Ticket</Link>
        <hr />

        <Chart
          width={"500px"}
          height={"300px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["tickets", "priority"],
            ["high", ticketPriorityHigh],
            ["low", ticketPriorityLow],
            ["medium", ticketPriorityMedium]
          ]}
          options={{
            title: "Ticket Priority"
          }}
          rootProps={{
            "data-testid": "1"
          }}
        />

        { <Chart
          width={'500px'}
          height={'300px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ['department','No of tickets']
            
          ]}
          options={{
            // Material design options
            chart: {
              title: 'Tickets per department'
            },
          }}
          // For tests
          rootProps={{ 'data-testid': '2' }}
        /> }
      </div>
    );
  }
}

TicketsList.contextType = MyContext

export default TicketsList;
