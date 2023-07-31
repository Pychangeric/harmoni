import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
          password_confirmation,
        },
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.errors) {
         
          setErrors(data.errors);
        } else {
          navigate('/login');
        }
      });
  };

  return (
    <div className='container'>
      <div className='signup'>
        <form onSubmit={handleSignUp} className='up'>
          <div className='box'>
            <h1>Create account</h1>
            <label>Username:</label>
            <input type='text' value={username} onChange={(e) => setUserName(e.target.value)} required />
            <label>Email:</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>Password:</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            <label>Confirmation:</label>
            <input
              type='confirmation'
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
            />
            <button type='submit'>Sign up</button>
            {errors.length > 0 && (
              <div className='error-container'>
                <p className='error-message'>Validation Errors:</p>
                <ul>
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
