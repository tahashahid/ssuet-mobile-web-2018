import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ADDTODO } from './actionTypes';
import AddTodo from "./AddTodo"
class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
        <AddTodo />
        </header>
      </div>
    );
  }
}

export default App;
