import React from 'react';
import loginImg from '../../assets/login.svg';



const Login = () => {
  return (
    <div className='main-container --flex-center'>
      <div className='img-container'>
        <img src={loginImg} className='login-img' alt='image for login screen' />
      </div>
      <div className='form-container --bg-grey'>
        <form className='--form-control'>
          <h2 className='--color-danger'>Login</h2>
          <input type='text' className="--width-100"
            placeholder="Username" />
          <input type="text" className="--width-100"
            placeholder="Password" />
          <button className='--btn --btn-primary --btn-block'>Login</button>
          <a href="#" className='--text-sm'>Forgot password</a>
          <span className="--text-sm --block">Don't have an account?
            <a href="#" className='--text-sm --px'>Register</a>
          </span>
        </form>
      </div>
    </div>

  );
};

export default Login;
