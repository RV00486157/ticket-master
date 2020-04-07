import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import MyContext from "../context/MyContext";
// class EmployeesList extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       employees: []
//     };
//   }

//   componentDidMount() {
//     axios
//       .get("/employees", {
//         headers: {
//           "x-auth": localStorage.getItem("authToken")
//         }
//       })
//       .then(response => {
//         const employees = response.data;
//         console.log(employees)
//         this.setState({ employees });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   render() {
//     return (
//       <MyContext.Consumer>
//         {console.log(this.context.value)}
//         <h1>Employees List</h1>
//         <ul>
//           {this.state.employees.map(employee => {
//           return <li key={employee._id}>{employee.name +" "+employee.department.name}</li>;
//           })}
//         </ul>
//         <Link to="/employees/new">Add Employee</Link>
//       </MyContext.Consumer>
//     );
//   }
// }

const EmployeesList = () => (
  <MyContext.Consumer>
      {context => (
          <div>
              <h1>Employees List</h1>
              <table border="1">
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Department</th>
                          <th>Mobile</th>
                          <th>Edit</th>
                          <th>Remove</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          context.employees.map(employee => {
                            return (<tr key={employee._id}>
                                        <td>{employee.name}</td>
                                        <td>{employee.department.name}</td>
                                        <td>{employee.phone}</td>
                                        <td><Button variant="outline-primary"><Link to={`/employees/edit/${employee._id}`}>edit</Link></Button></td>
                                        <td><Button onClick={()=>context.removeEmployee(employee._id)} variant="outline-danger">remove</Button></td>
                                    </tr>)
                        })
                      }
                  </tbody>
              </table>
              
              <Link to="/employees/new">Add Employee</Link>
          </div>
      )}
  </MyContext.Consumer>
);
export default EmployeesList;
