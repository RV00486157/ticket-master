import React from "react";
import MyContext from "../context/MyContext";
import EmployeeForm from "./Form";

class EmployeesNew extends React.Component {

  handleSubmit = (formData) => {
    this.context.addEmployee(formData)
    this.props.history.push("/employees");
    window.location.reload()
  }
  render() {
    return (
        <>
          <h2>Add Employee</h2>
          <EmployeeForm handleSubmit={this.handleSubmit} departments={this.context.departments}/>
        </>
    );
  }
}

EmployeesNew.contextType = MyContext

export default EmployeesNew;
