import Axios from 'axios'

const axios = Axios.create({
    //baseURL  :'http://dct-ticket-master.herokuapp.com'
    baseURL : 'http://localhost:3030'
})

export default axios