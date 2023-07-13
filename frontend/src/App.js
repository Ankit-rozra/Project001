import React from 'react';
import './App.css';
import Main from './Pages/Main';
import store from './Redux/store';
import { Provider } from 'react-redux';
function App() {
  // const location = window.location.pathname;
  return (
    <Provider store={store}>
      <div className="main">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
