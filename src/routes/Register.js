import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {

    const [registerResult, setRegisterResult] = useState('');

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {username, password} = e.target.elements;

        const registered = await fetch('http://localhost:3000/users/register', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username.value, password: password.value})
        });

        if (registered.status === 201) {
            setRegisterResult('');
            navigate('/');
        }
        else {
            setRegisterResult('* Issue creating that account');
        }
    }

    return ( 
        <div className="auth-form-wrapper">
            <h1>Register</h1>
            <form id="register-form" onSubmit={handleSubmit}>
                <label className="form-label" htmlFor="username">Username:</label>
                <input className="form-input" id="username" type="text" />

                <label className="form-label" htmlFor="password">Password:</label>
                <input className="form-input" id="password" type="password" />
                <small id="register-result" className="form-result">{ registerResult }</small>

                <button id="register-btn" className="form-btn" type="submit">Register</button>
            </form>
            <p>Already have an account? <Link id="login-link" to="/">Login here</Link></p>
        </div>
     );
}
 
export default Register;