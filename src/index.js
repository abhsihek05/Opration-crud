import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from './Forms/SignIn';
import SignUP from './Forms/SignUp';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SignIn /> */}
    <SignUP />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
