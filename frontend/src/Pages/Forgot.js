import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopNav from './TopNav';
function Forgot() {
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const users = useSelector((state) => state.authentication.credentials);
  const dispatch = useDispatch();
  const handleLogin = () => {
    const user = {
      email: email,
      question: question,
      answer: answer,
    };
    const existingUser = users.find(
      (u) =>
        u.email === user.email &&
        u.question === user.question &&
        u.answer === user.answer
    );

    if (existingUser) {
      return;
    }
    dispatch({
      type: 'LOGIN',
      payload: {
        email: email,
        question: question,
        answer: answer,
      },
    });
    setEmail('');
    setQuestion('n/a');
    setAnswer('');
  };
  return (
    <div>
      <TopNav display="Login" />
      <div className="Log-form">
        <div>
          <h1>Login</h1>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgot;
