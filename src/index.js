import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Nav} from "./Nav";
import Spin from './Spin'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Router';
import {BrowserRouter} from 'react-router-dom';

//this part just redirects to '/dashboard' if the end of url is just '/'
if(window.location.href.substring(window.location.href.lastIndexOf('/') + 1)==="")
    {window.location.replace("/dashboard");}

ReactDOM.render(
  <React.StrictMode>
      <canvas id={"bg"}/>
        <Router/>
      <Spin/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
