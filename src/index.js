import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import Articles from './components/articles/Articles'
import Login from './components/Login/Login'

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Header/>
    <Articles />
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);



