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
  const [phone, setPhone] = useState('');
  const [upi, setUpi] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
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
        phone: phone,
        upi: upi,
        question: question,
        answer: answer,
      },
    });
    setUsername('');
    setEmail('');
    setPassword('');
    setAadhar('');
    setAddress('');
    setReferral('');
    setPhone('');
    setUpi('');
    setQuestion('n/a');
    setAnswer('');
  };
  const state = useSelector((state) => state.authentication.credentials);
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
        </div>{' '}
        <div>
          <input
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setReferral(e.target.value)}
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
          <input
            type="text"
            placeholder="Upi id"
            value={upi}
            onChange={(e) => setUpi(e.target.value)}
          />
        </div>
        <div>
          <select
            className="choice"
            name="country"
            id="country"
            onChange={(e) => setQuestion(e.target.value)}
          >
            <option value="n/a">Select Security Question</option>
            <option value="What is the name of your first pet?">
              What is the name of your first pet?
            </option>
            <option value="What is the name of your high school?">
              What is the name of your high school?
            </option>
            <option value="What is your favorite color?">
              What is your favorite color?
            </option>
            <option value=" What is your birth city?">
              What is your birth city?
            </option>
            <option value="What is your favorite book?">
              What is your favorite book?
            </option>
            <option value="What is your favorite sports team?">
              What is your favorite sports team?
            </option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
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
              {item.upi}
              {item.question}
              {item.answer}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Register;
