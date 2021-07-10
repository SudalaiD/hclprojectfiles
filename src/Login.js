import React from 'react'
import './Login.css'

function Login() {
    return (
        <div className="login">
            <div className="login__input">
           
            <input type="text" />
            </div>
            <div className="login__input">
         
            <input type="password" />
            </div>
            <div className="login__button">
            <button type="button">Login</button>
            </div>
        </div>
    )
}

export default Login
