import React from "react"
import axios from "../../config/axios"
import isEmpty from "lodash/isEmpty"
import { Link } from "react-router-dom"

class CustomerShow extends React.Component{
    constructor(){
        super()
        this.state={
            customer:{}
        }
    }
    componentDidMount() {
        const id=this.props.match.params.id
        axios
          .get(`/customers/${id}`, {
            headers: {
              "x-auth": localStorage.getItem("authToken")
            }
          })
          .then(response => {
            const customer = response.data;
            this.setState({ customer });
          })
          .catch(err => {
            console.log(err);
          });
    }

    

    render(){
        const { customer } = this.state
        return(
            <div>
                <h1>Customer Details</h1>
                {
                    isEmpty(this.state.customer)?(
                        <div>
                            <p>loading...</p>
                        </div>
                    ):(
                        <div>
                            <p>{customer.name} {customer.email} {customer.phone} {}</p>
                            <Link to="/customers">back</Link>
                            
                        </div>
                    )
                }
        
            </div>
        )
    }
}

export default CustomerShow