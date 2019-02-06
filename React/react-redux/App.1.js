import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;
const About1 = () => <h2>About1</h2>;





const AppRouter = () => (
  <Router>
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
          <li>
            <Link to="/about/about1">About1</Link>
          </li> 
        </ul>
      </nav> */}

      <Route path="/" exact component={Index} />
      
      <Route path="/about" component={About} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);




export default AppRouter;
