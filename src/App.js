import './App.css';
import React, { Component } from 'react'
import Header from './components/Header'
import Routes from './Routes'
import Home from "./Home";
import Register from './Register'
import { useLocation } from 'react-router-dom';


class App extends Component {
  location = window.location.pathname;
  isLoggedin = JSON.parse(localStorage.getItem('loggedin'));

  render() {
    
    return (
      <div className="App">
        <Header />
       
        {this.isLoggedin ? <Home/>:''}
        {(this.location == "/" && !this.isLoggedin)  ? <Register/>:''}

        <Routes/>
      </div>
    );
  }}


export default App;
