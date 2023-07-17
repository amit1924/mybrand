import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const Signup = ({ toggleLoginPage }) => {
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/signup', {
        username: signupUsername,
        email: signupEmail,
        password: signupPassword,
      });

      // Handle successful signup
      console.log(response.data); // You can handle the response data as needed
      setSignupUsername('');
      setSignupEmail('');
      setSignupPassword('');
      setSignupError('');
    } catch (error) {
      // Handle signup error
      console.error(error);
      if (error.response) {
        setSignupError(error.response.data.message);
      } else {
        setSignupError('Signup failed. Please try again.');
      }
    }
  };

  return (
    <div className="signup-form">
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={signupUsername}
          onChange={event => setSignupUsername(event.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Email"
          value={signupEmail}
          onChange={event => setSignupEmail(event.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={signupPassword}
          onChange={event => setSignupPassword(event.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Signup
        </button>
      </form>
      {signupError && <p>{signupError}</p>}
      <p>
        Already have an account?{' '}
        <span className="switch-link" onClick={toggleLoginPage}>
          Login here
        </span>
      </p>
    </div>
  );
};

export default Signup;
