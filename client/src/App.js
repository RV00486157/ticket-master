import React from 'react' 
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'

import Home from './components/static/Home'
import Login from './components/users/Login'
import Register from './components/users/Register'
import Logout from './components/users/Logout'
import Account from './components/users/Account'

import CustomerList from './components/customers/List'
import CustomerNew from './components/customers/New'
import CustomerShow from './components/customers/Show'
import CustomerEdit from './components/customers/Edit'

import DepartmentList from "./components/departments/List"

import EmployeesList from "./components/employees/List"
import EmployeesNew from "./components/employees/New"
import EmployeeEdit from "./components/employees/Edit"

import TicketsList from "./components/tickets/List"
import TicketNew from './components/tickets/New'
import TicketShow from './components/tickets/Show'
import TicketEdit from './components/tickets/Edit'
import { Landing } from './components/static/Landing'

function App(props) {
    return (
        <BrowserRouter>
        <div>   
            <Home/>
            
            <Switch>        
                <Route exact path="/" component={Landing}/>

                <Route path="/users/login" component={Login} />
                <Route path="/users/register" component={Register} />
                <Route path="/users/logout" component={Logout}/>
                <Route path="/users/account" component={Account}/>

                <Route path="/customers" component={CustomerList} exact={true}/>
                <Route path="/customers/new" component={CustomerNew}/>
                <Route path="/customers/edit/:id" component={CustomerEdit}/>
                <Route path="/customers/:id" component={CustomerShow}/>

                <Route path="/departments" component={DepartmentList}/>

                <Route exact path="/employees" component={EmployeesList}/>
                <Route path="/employees/new" component={EmployeesNew}/>
                <Route path="/employees/edit/:id" component={EmployeeEdit}/>
               
                <Route path="/tickets" component={TicketsList} exact={true}/>
                <Route path="/tickets/new" component={TicketNew}/>
                <Route path="/tickets/edit/:id" component={TicketEdit}/>
                <Route path="/tickets/:id" component={TicketShow}/>
            </Switch>
 
        </div>
        </BrowserRouter>
    )
}

export default App