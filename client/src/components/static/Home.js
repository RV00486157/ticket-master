import React, { Fragment } from 'react' 
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Home = (props) =>(
    <Fragment>
        <Navbar bg="dark" variant="dark" expand='lg'>
        <Navbar.Brand  className="navbar-brand" href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav className="navbar-nav">
        {  
            localStorage.getItem('authToken')?
            (
                <Fragment>
                    <Link to="/customers" className="nav-link">Customers</Link>
                    <Link to="/departments" className="nav-link">Departments</Link>
                    <Link to="/employees" className="nav-link">Employees</Link>
                    <Link to="/tickets" className="nav-link">Tickets</Link>
                    <Link to="/users/account" className="nav-link">Account</Link>
                    <Link to="/users/logout" className="nav-link">Logout</Link>
                </Fragment>
            ):(
                <Fragment>
                    <Link to="/users/login" className="nav-link">Login</Link>
                    <Link to="/users/register" className="nav-link">Register</Link>
                </Fragment>
            )
        }    
    </Nav>
    
  </Navbar.Collapse>
        </Navbar>
    </Fragment>
)

export default Home