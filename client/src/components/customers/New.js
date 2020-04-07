import React from 'react'
import CustomerForm from './Form'
import MyContext from '../context/MyContext'

class CustomerNew extends React.Component{
   
    handleSubmit=(formData)=>{
        this.context.addCustomer(formData)
        this.props.history.push("/customers")
        window.location.reload()
    }
    render(){
        return(
            <div>
                <h2>Add New Customer</h2>
                <CustomerForm handleSubmit={this.handleSubmit}/>
            </div>
        )
        
    }
}
CustomerNew.contextType = MyContext

export default CustomerNew