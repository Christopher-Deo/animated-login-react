import React from 'react'
import Login from '../../components/auth/Login';
import Register from "../../components/auth/Register"
import "./AuthContainer.scss"
const AuthContainer = () => {
  return (
    <section className='--flex-center --100vh'>
      <div className="container box">
        {/* <Login /> */}
        <Register />
      </div>
      
    </section>
  )
}

export default AuthContainer
