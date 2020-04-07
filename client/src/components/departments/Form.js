import React from 'react'

class DepartmentForm extends React.Component{
    constructor(){
        super()
        this.state={
            name:''
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            name:this.state.name
        }
        this.props.handleSubmit(formData)
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}/><br/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}

export default DepartmentForm