import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          onLogin();
          navigate('/home');
        } else {
          res.json().then((data) => {
            setError(data.message || 'Sorry, login failed.');
          });
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='login'>
      <form onSubmit={handleLogin} className='in'>
        <div className='box'>
          <h1>Log In</h1>
          {error && <div className='error'>{error}</div>} 
          <label>Email:</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Password:</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type='submit'>Log in</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
