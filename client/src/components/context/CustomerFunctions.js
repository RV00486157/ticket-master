import axios from '../../config/axios'

export const removeCustomer = (id) =>{
    axios
    .delete(`/customers/${id}`, {
      headers: {
        "x-auth": localStorage.getItem("authToken")
      }
    })
    .then(response => {
    //   this.setState(prevState => {
    //     return {
    //       customers: prevState.customers.filter(
    //         customer => customer._id !== id
    //       )
    //     };
      //});

      window.location.reload()
    })
    .catch(err => {
      console.log(err);
    });
}

export const addCustomer = (formData) =>{
    axios.post('/customers',formData,{
        headers:{
            'x-auth' : localStorage.getItem('authToken')
        }
    })
    .then((response)=>{
        if(response.data.hasOwnProperty('errors')){
            alert(response.data.message)
        }else{
            alert("added New Customer")
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const editCustomer = (formData, id) =>{
  axios.put(`/customers/${id}`,formData,{
    headers:{
        'x-auth':localStorage.getItem('authToken')
    }
})
.then((response)=>{
   if(response.data){
     alert("Successfully Edited")
   }
})
.catch((err)=>{
    console.log(err)
})
}