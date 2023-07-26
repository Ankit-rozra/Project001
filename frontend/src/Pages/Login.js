import TopNav from './TopNav';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Css/Log.css';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);
  const users = useSelector((state) => state.authentication.credentials);
  const dispatch = useDispatch();
  const handleLogin = async () => {
    const user = {
      username: username,
      password: password,
    };

    const jsonString = JSON.stringify(user);
    try {
      // Make the HTTP POST request to the login URL
      const response = await axios.post(
        'http://mlmproject.pythonanywhere.com/users/login/',
        jsonString
      );

      // Check if the response contains the 'token' field
      if (response.data && response.data.token) {
        // Dispatch a successful login action and set isLoggedIn to true
        dispatch({
          type: 'LOGIN',
          payload: {
            username: username,
            password: password,
            token: response.data.token,
          },
        });

        // Dispatch action to set 'isLoggedIn' to true
        dispatch({
          type: 'SET_LOGGED_IN',
          payload: true,
        });
      } else {
        // Handle unsuccessful login (optional)
        console.log('Login failed. Invalid username or password.');
      }
    } catch (error) {
      // Handle any errors that occurred during the HTTP request (optional)
      console.error('Error:', error.message);
    }
    // Check if the user is already present in the state.
    // const existingUser = users.find(
    //   (u) => u.username === user.username && u.password === user.password
    // );

    // if (existingUser) {
    //   return;
    // }
    // dispatch({
    //   type: 'LOGIN',
    //   payload: {
    //     username: username,
    //     password: password,
    //   },
    // });
  };

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  return (
    <div>
      <TopNav display="Login" />
      <div className="Log-form">
        {isLoggedIn ? (
          <div>
            <h1>You are logged in!</h1>
            <button onClick={handleLogout}>Log out</button>
          </div>
        ) : (
          <div>
            <h1>Login</h1>
            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button onClick={handleLogin}>Login</button>
            </div>
            <a href="/forgot" className="aForgot">
              <div className="forgot">Forgotten password?</div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
export default Login;
