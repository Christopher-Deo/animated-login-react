import React from 'react'
import Login from '../../components/auth/Login';
import "./AuthContainer.scss"
const AuthContainer = () => {
  return (
    <section className='--flex-center --100vh'>
      <div className="container box">
        <Login />
      </div>
      
    </section>
  )
}

export default AuthContainer
