import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { useAuth } from '../../hooks/useAuth'

const LoginInput = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const handleUsernameChange = e => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username, password);
    login(username, password)
    // axios.post('/login', {
    //   username,
    //   password
    // })
    //   .then(res => {
    //     const token = res.data;
    //     sessionStorage.setItem({ jwt: token })
    //     const decoded = jwt.decode(token);
    //     console.log(decoded);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   })
  }
  return (
    <div className="center">

      <form onSubmit={handleSubmit}>

        <div className="container">

          <label htmlFor="uname"><b>Username</b></label>
          <input type="username" placeholder="Enter Username" username="uname" value={username} onChange={handleUsernameChange} required />

          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" password="pwd" value={password} onChange={handlePasswordChange} required />

          <button type="submit">Login</button>

        </div>

      </form>

    </div>
  );
}

const LoginPage = () => {
  return (
    <LoginInput />
  );
};

export default LoginPage;