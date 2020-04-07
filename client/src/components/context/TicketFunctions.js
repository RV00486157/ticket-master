import axios from "../../config/axios"

export const addTicket = (formData)=>{
    axios.post('/tickets',formData,{
        headers:{
          'x-auth':localStorage.getItem('authToken')
        }
      })
      .then((response)=>{
        if(response.data.hasOwnProperty('errors')){
          console.log(response.data.errors)
        }else{
          if(response.data){
              alert("Ticket added Successfully")
          }else{
              alert("Something went wrong")
          }
        }
      })
      .catch((err)=>{
        console.log(err)
      })
}

export const editTicket=(id)=>{
  axios.put(`/tickets/${id}`, {
    isResolved: true
  }, {
    headers:{
      'x-auth': localStorage.getItem('authToken')
    }
  })
  .then(response=>{
    if(response.data){
      
      window.location.reload()
    }else{
      alert("Something went wrong")
    }
  })
  .catch(err=>{
    console.log(err)
  })
}

export const removeTicket=(id)=>{
  axios.delete(`/tickets/${id}`, {
    headers:{
      'x-auth':localStorage.getItem('authToken')
    }
  })
  .then((response)=>{
    if(response.data){
      alert("Ticket removed Successfully")
      window.location.reload()
    }else{
      alert("Something went wrong")
    }
  })
  .catch(err=>{
    console.log(err)
  })
}