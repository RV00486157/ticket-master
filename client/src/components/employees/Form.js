import React from "react";
import { Link } from "react-router-dom";

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.employee? props.employee.name: "",
      email: props.employee? props.employee.email: "",
      mobile: props.employee? props.employee.phone: "",
      department: props.employee? props.employee.department._id: "",
      departments: props.departments? props.departments: ""
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.mobile,
      department: this.state.department
    }
    this.props.handleSubmit(formData)
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={this.state.name}
            name="name"
            id="name"
            onChange={this.handleChange}
          /><br/>

          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={this.state.email}
            name="email"
            id="email"
            onChange={this.handleChange}
          /><br/>

          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            value={this.state.mobile}
            name="mobile"
            id="mobile"
            onChange={this.handleChange}
          /><br/>

          <label htmlFor="department">Departments</label>
          <select
            value={this.state.department}
            name="department"
            onChange={this.handleChange}
          >
            <option value=" "> </option>
            {this.state.departments &&
              this.state.departments.map(department => {
                return (
                  <option value={department._id} key={department._id}>{department.name}</option>
                );
              })}
          </select>
          <br/>
          <input type="submit"/>
        </form>
        <Link to="/employees">back</Link>
      </div>
    );
  }
}

export default EmployeeForm;