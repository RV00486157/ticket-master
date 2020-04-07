import React,{ Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Logout(props){
    localStorage.removeItem('authToken')
    
    return(
        <Fragment>
            <h2>
                Succesfully logged out
            </h2>
            <Link to="/">Go Back to home page</Link>
        </Fragment>
    )
}

export default Logout