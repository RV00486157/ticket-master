import React, { Fragment } from "react";
import MyContext from "../context/MyContext"
import EmployeeForm from "./Form"

class EmployeeEdit extends React.Component{
    handleSubmit = (formData) =>{
        console.log(formData)
        this.context.editEmployee(formData,this.props.match.params.id)
        this.props.history.push("/employees")
        window.location.reload()
    }
    render(){
        return(
            <Fragment>
                <h2>Edit Employee</h2>
                <EmployeeForm departments={this.context.departments} employee={this.context.employees.find(emp=>emp._id===this.props.match.params.id)} handleSubmit={this.handleSubmit}/>  
            </Fragment>
        )
       
    } 
}

EmployeeEdit.contextType = MyContext

export default EmployeeEdit

