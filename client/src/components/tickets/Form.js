import React from "react";
import Select from 'react-select';
import axios from "../../config/axios";
import MyContext from "../context/MyContext";

class TicketForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
          code:props.ticket?props.ticket.code:'',
          customer:props.ticket?props.ticket.customer._id:'',
          department:props.ticket?props.ticket.department._id:'',
          employees:[],
          message:props.ticket?props.ticket.message:'',
          priority:props.ticket?props.ticket.priority:'',
          departments:[],
          employeesList:[],
          customers:[]
        }
    }

    componentDidMount(){
      this.setState({
        departments: this.context.departments,
        employeesList: this.context.employees,
        customers: this.context.customers
      })
    }

      handleChange=(e)=>{
        this.setState({
          [e.target.name] : e.target.value
        })
      }
    handleEmpChange=(e)=>{
      this.setState({
        employees:e
      })
    }

    handleSubmit=(e)=>{
      e.preventDefault()
    const formData={
      code: this.state.code,
      customer: this.state.customer,
      department: this.state.department,
      employees: this.state.employees.map(emp=>emp.value),
      message: this.state.message,
      priority: this.state.priority
    }
    this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="code">Code: </label>
                    <input type="text" value={this.state.code} name="code" id="code" onChange={this.handleChange}/><br/>

                    <label htmlFor="customer">Customer: </label>
                    <select name="customer" id="customer" value={this.state.customer} onChange={this.handleChange}>
                    <option value=" "> </option>
                        {
                        this.state.customers.map((customer)=>{
                            return <option key={customer._id} value={customer._id}>{customer.name}</option>
                        })
                        }
                    </select><br/>

                    <label htmlFor="department">Department:</label>
                    <select name="department" id="department" value={this.state.department} onChange={this.handleChange}>
                    <option value=" "> </option>
                        {
                        this.state.departments.map((department)=>{
                            return <option key={department._id} value={department._id}>{department.name}</option>
                        })
                        }
                    </select><br/>
                    <label htmlFor="employees">Employee:</label>
                    <Select name="employees" id="employees" value={this.state.employees} onChange={(e)=>this.handleEmpChange(e)}
                    isMulti options={this.state.employeesList.map((emp)=>{
                      return { 
                        value: emp._id,
                        label:emp.name
                      }
                    })} className="basic-multi-select"
                    classNamePrefix="select" 
                    />

                    <br/>
                    

                    <label htmlFor="message"> Message:</label>
                    <textarea name="message" id="message" value={this.state.message} onChange={this.handleChange} rows="1" cols="100"/><br/>

                    <label htmlFor="priority"> Priority: </label> {"  "}
                        High<input type="radio" value="high" name="priority" checked={this.state.priority==="high"} onChange={this.handleChange}/>{"  "}
                        Medium<input type="radio" value="medium" name="priority" checked={this.state.priority==="medium"}onChange={this.handleChange}/>{"  "}
                        Low<input type="radio" value="low" name="priority" checked={this.state.priority==="low"}onChange={this.handleChange}/>        
                    <br/>

                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

TicketForm.contextType = MyContext

export default TicketForm