import React from 'react'

import DepartmentForm from './Form'
import MyContext from '../context/MyContext'

class DepartmentList extends React.Component{
    
    handleRemove=(id)=>{
        this.context.removeDepartment(id)
        window.location.reload()
    }

    handleSubmit=(formData)=>{
        this.context.addDepartment(formData)
    }
    
    render(){
        return(
            <div>
                <h1>Department List - {this.context.departments.length}</h1>
                <ul>
                    {
                        this.context.departments.map((department)=>{
                        return <li key={department._id}>{department.name}<button onClick={()=>{
                            this.handleRemove(department._id)
                        }}>remove</button></li>
                        })
                    }
                </ul>
                <h2>Add Department</h2>
                <DepartmentForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

DepartmentList.contextType = MyContext

export default DepartmentList