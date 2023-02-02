import React from 'react'
import Login from '../../components/auth/Login';
import Register from "../../components/auth/Register"
import Reset from "../../components/auth/Reset"
import "./AuthContainer.scss"


const AuthContainer = () => {
  return (
    <section className='--flex-center --100vh'>
      <div className="container box">
        {/* <Login /> */}
        {/* <Register /> */}
        <Reset />
      </div>
      
    </section>
  )
}

export default AuthContainer
