import React from 'react';
import './Login.css';

const Login = ({ handleLogin, setUsername, setPassword }) => {
  const handleSubmit = async event => {
    event.preventDefault();
    // Call the handleLogin function from the parent component
    handleLogin();
  };

  return (
    <div className="login-form">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={event => setUsername(event.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={event => setPassword(event.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
