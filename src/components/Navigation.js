import React, { useState } from 'react';
import Nike from './nik.png';
import Login from './Login';
import Signup from './Signup';

const Navigation = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [isLoginPage, setIsLoginPage] = useState(true);
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleLogin = async () => {
// Handle login logic here
};

const handleLogout = () => {
setIsLoggedIn(false);
};

const toggleLoginPage = () => {
setIsLoginPage(prev => !prev);
};

return (
<div>
<nav>
<div className="logo">
<img src={Nike} alt="logo" />
</div>
{isLoggedIn ? (
<button onClick={handleLogout} className="logout-button">
Logout
</button>
) : (
<button onClick={toggleLoginPage} className="login-button">
{isLoginPage ? 'Signup' : 'Login'}
</button>
)}
</nav>
{isLoggedIn ? (
<div className="welcome-message">
<h2>Welcome, {username}!</h2>
<p>This is your personalized page.</p>
</div>
) : (
<div className="auth-container">
{isLoginPage ? (
<Login handleLogin={handleLogin} setUsername={setUsername} setPassword={setPassword} />
) : (
<Signup toggleLoginPage={toggleLoginPage} />
)}
</div>
)}
</div>
);
};

export default Navigation;





