import axios from '../../config/axios'

export const addEmployee = (formData)=>{
  axios.post("/employees", formData, {
            headers: {
              "x-auth": localStorage.getItem("authToken")
            }
          })
          .then(response => {
            if (response.data.hasOwnProperty("erros")) {
              alert(response.data.message);
            } else {
                console.log(response.data)
              
            }
          })
          .catch(err => {
            console.log(err);
          });
}

export const removeEmployee = (id)=>{
  axios.delete(`/employees/${id}`,{
    headers:{
      "x-auth": localStorage.getItem("authToken")
    }
  })
  .then(response=>{
    if(response.data){
      alert("Successfully removed")
      window.location.reload()
    }else{
      alert("Something went wrong")
    }
  })
  .catch(err=>{
    console.log(err)
  })
}

export const editEmployee = (formData,id) =>{
  axios.put(`employees/${id}`, formData, {
    headers:{
      "x-auth": localStorage.getItem("authToken")
    }
  })
  .then(response=>{
    if(response.data){
      console.log(response.data)
      alert("Edited successfully")
    }else{
      alert("Something went wrong")
    }
  })
  .catch(err=>{
    console.log(err)
  })
}