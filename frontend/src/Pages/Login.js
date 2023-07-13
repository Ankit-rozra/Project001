import TopNav from './TopNav';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Css/Log.css';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);
  const users = useSelector((state) => state.authentication.credentials);
  const dispatch = useDispatch();
  const handleLogin = () => {
    const user = {
      username: username,
      password: password,
    };

    // Check if the user is already present in the state.
    const existingUser = users.find(
      (u) => u.username === user.username && u.password === user.password
    );

    if (existingUser) {
      return;
    }
    dispatch({
      type: 'LOGIN',
      payload: {
        username: username,
        password: password,
      },
    });
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
          </div>
        )}
      </div>
    </div>
  );
};
export default Login;
