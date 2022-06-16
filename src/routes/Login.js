import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = ({ changeAuth }) => {

    const [loginResult, setLoginResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {username, password} = e.target.elements;
        console.log(username);

        const auth = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username.value, password: password.value})
        });

        if (auth.status === 200) {
            setLoginResult('');
            changeAuth(true);
        }
        else {
            console.log('Login was unsuccessul');
            setLoginResult('* Username or Password not found');
        }
        
    }

    return ( 
        <div className="auth-form-wrapper">
            <h1>Login</h1>
            <form id="login-form" onSubmit={handleSubmit}>
                <label className="form-label" htmlFor="username">Username:</label>
                <input id="username" className="form-input" type="text" required/>

                <label className='form-label' htmlFor="password">Password:</label>
                <input id="password" className="form-input" type="password" required/>
                <small id="login-result" className="form-result">{ loginResult }</small>

                <button id="login-btn" className="form-btn" type="submit">Login</button>
            </form>
            <p>Need an account? <Link id="register-link" to='register'>Register here</Link></p>
        </div>
     );
}
 
export default Login;