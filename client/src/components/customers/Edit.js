import React from 'react'
import isEmpty from 'lodash/isEmpty'

import CustomerForm from './Form'
import MyContext from '../context/MyContext'

class CustomerEdit extends React.Component{
    componentDidMount(){
        console.log(this.context.customers)
    }
    handleSubmit=(formData)=>{
        const id=this.props.match.params.id
        this.context.editCustomer(formData,id)
        this.props.history.push("/customers")
        window.location.reload()
    }
    render(){
        return(
            <div>
                <h2>Edit Customer</h2>
                {
                    <CustomerForm customer={this.context.customers.find(customer=>customer._id===this.props.match.params.id)} handleSubmit={this.handleSubmit}/>
                }
                
            </div>
        )
    }
}
CustomerEdit.contextType=MyContext
export default CustomerEdit