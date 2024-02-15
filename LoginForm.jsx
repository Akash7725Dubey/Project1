import React from 'react';
import './LoginForm.css';
import { FaCircleUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
export const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' requied />
                <FaCircleUser className='icon' />
            </div>
            <h1>Password</h1>
            <div className="input-box">
                <input type="Password" placeholder='Password' requied />
                <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
                <label>
                    <input type="checkbox" />Remember Me
                    <a href="#">Forgot Password</a>
                </label>

            </div>
            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don't have an Account?</p>
            </div>
        </form>
    </div>
  );
};
export default LoginForm;
