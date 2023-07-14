import TopNav from './TopNav';
import React, { useState } from 'react';
import '../Css/Log.css';
import { useDispatch, useSelector } from 'react-redux';
function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [address, setAddress] = useState('');
  const [referral, setReferral] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SIGNUP',
      payload: {
        username: username,
        password: password,
        email: email,
        aadhar: aadhar,
        address: address,
        referral: referral,
      },
    });
    setUsername('');
    setEmail('');
    setPassword('');
    setAadhar('');
    setAddress('');
    setReferral('');
  };
  const state = useSelector((state) => state.authentication.credentials);
  // const Sestate = useMemo(() => state.credentials, [state]);
  return (
    <div>
      <TopNav display="Sign up" />
      <div className="Log-form">
        <h1>Sign up</h1>
        <div className="input">
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
          {' '}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Aadhar Number"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Referral code"
            value={referral}
            onChange={(e) => setReferral(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>
          {state.map((item) => (
            <div>
              {item.username}
              {item.password}
              {item.email}
              {item.aadhar}
              {item.address}
              {item.referral}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Register;
