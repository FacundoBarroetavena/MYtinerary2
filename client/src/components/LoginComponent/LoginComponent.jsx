import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const LoginComponent = ({handleSubmit}) => {
    return (
        <div>
            <h1>Welcome to Login</h1>

            <form onSubmit={handleSubmit}>
                <label>Username:
                    <input type="text" name="username" id="txtUsername"/>
                </label>
                <label>Password:
                    <input type="password" name="password" id="txtPassword"/>
                </label>
                
                <input type="submit" id="submitLogin"/>
            </form>        
            <a href="http://localhost:5000/api/users/google">
                <button>Login with Google</button>
            </a>
        </div>
    );
};

export default LoginComponent;