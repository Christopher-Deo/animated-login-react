import React from 'react';
import registerImg from "../../assets/register.svg";

const Register = () => {
    return (
        <div className='main-container --flex-center'>
            
            <div className='form-container --bg-grey'>
                <form className='--form-control'>
                    <h2 className='--color-danger --text-center'>Register</h2>
                    <input type='text' className="--width-100"
                        placeholder="Enter a username" />
                    <input type='email' className="--width-100"
                        placeholder="Enter your email" />
                    <input type="text" className="--width-100"
                        placeholder="Enter a password" />
                    <button className='--btn --btn-primary --btn-block'>Register</button>
                    
                    <span className="--text-sm --block">Have an account?
                        <a href="#" className='--text-sm --px'>Login</a>
                    </span>
                </form>
            </div>
            <div className='img-container'>
                <img src={registerImg} alt='register screen' />
            </div>
        </div>
    );
};

export default Register;
