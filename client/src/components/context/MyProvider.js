import React from 'react'
import MyContext from './MyContext'
import axios from '../../config/axios'
import { addEmployee, removeEmployee, editEmployee } from './EmployeesProvider'
import { addCustomer, removeCustomer, editCustomer } from './CustomerFunctions'
import { addDepartment, removeDepartment } from './DepartmentFunctions'
import { addTicket, removeTicket, editTicket } from './TicketFunctions'

class MyProvider extends React.Component{
    constructor(){
        super()
        this.state={
           employees: [],
           departments: [],
           customers: []
        }
    }

  
    componentDidMount(){
        Promise.all([axios.get("/tickets",{
          headers: {
            "x-auth": localStorage.getItem("authToken")
          }
        }),axios.get("/employees", {
          headers: {
            "x-auth": localStorage.getItem("authToken")
          }
        }),axios.get("/customers", {
          headers: {
            "x-auth": localStorage.getItem("authToken")
          }
        }),axios.get("/departments", {
          headers: {
            "x-auth": localStorage.getItem("authToken")
          }
        })])
          .then(values=>{
            this.setState({
              tickets: values[0].data,
              employees: values[1].data,
              customers: values[2].data,
              departments: values[3].data
            })
          })
          .catch(err => {
            console.log(err);
          });
    }

      addEmployee = (formData) => {
        addEmployee(formData)
      };

      removeEmployee =(id) =>{
        removeEmployee(id)
      }

      editEmployee = (formData,id) =>{
        editEmployee(formData,id)
      }

      removeCustomer = (id) =>{
        removeCustomer(id)
      }

      addCustomer = (formData) =>{
        addCustomer(formData)
      }

      editCustomer=(formData,id)=>{
        editCustomer(formData,id)
      }

      removeDepartment = (id) =>{
        removeDepartment(id)
      }

      addDepartment = (formData)=>{
        addDepartment(formData)
      }

      addTicket = (formData)=>{
        addTicket(formData)
      }

      removeTicket = (id) =>{
        removeTicket(id)
      }
      
      editTicket = (id) =>{
        editTicket(id)
      }

    render(){
        return(
            <MyContext.Provider value={{
                employees: this.state.employees,
                departments: this.state.departments,
                customers: this.state.customers,
                tickets: this.state.tickets,
                removeCustomer: this.removeCustomer,
                addCustomer:this.addCustomer,
                editCustomer:this.editCustomer,
                removeDepartment: this.removeDepartment,
                addDepartment: this.addDepartment,
                addEmployee:this.addEmployee,
                editEmployee: this.editEmployee,
                removeEmployee: this.removeEmployee,
                addTicket: this.addTicket,
                editTicket: this.editTicket,
                removeTicket: this.removeTicket
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider