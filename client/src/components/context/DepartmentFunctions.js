import axios from '../../config/axios'

export const addDepartment = (formData)=>{
    axios.post('/departments',formData,{
        headers:{
            'x-auth':localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        window.location.reload()
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const removeDepartment = (id)=>{
    const confirm = window.confirm('Are you sure?')
        if(confirm){
            axios.delete(`/departments/${id}`,{
                headers:{
                    'x-auth':localStorage.getItem('authToken')
                }
            })
            .then((response)=>{
               if(response.data){
                   alert("Deleted Successfully")
               }
            })
            .catch((err)=>{
                console.log(err)
            })
        }
}