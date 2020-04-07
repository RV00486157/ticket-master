import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import MyContext from '../context/MyContext'
function CustomerList(){
    return(
      <MyContext.Consumer>
        {
          context=>(
            <div>
              <h1>Listing Customers</h1>
        {context.customers.length === 0 ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : (
          <div>
            <ul>
              {context.customers.map(customer => {
                return (
                  <li key={customer._id}>
                    <Link to={`/customers/${customer._id}`}>{customer.name}</Link>
                    <Button variant="outline-primary"><Link to={`/customers/edit/${customer._id}`}>edit</Link></Button>
                    <Button variant="outline-danger"
                      onClick={() => {
                          context.removeCustomer(customer._id);
                      }}
                    >
                      remove
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <Link to="/customers/new">Add Customer</Link>
            </div>
          )
        }
      </MyContext.Consumer>
    )

}

export default CustomerList;
