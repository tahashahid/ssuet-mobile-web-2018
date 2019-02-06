import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from "redux";

function fn(state = {counter: 0}, action){
  let newState = { ...state };
  // {counter: 0}
  // { {counter: 0} }
  switch(action.type){
    case "INCREMENT":
    newState.counter = state.counter + 1;
      break;
    case "DECREMENT":
    newState.counter = state.counter - 1;
      break;
    default:
      break;
  }
  return newState;
}

let store = createStore(fn);

class App extends Component {
  constructor(){
    super();
    this.state = {
      counter : 0
    }
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          {this.state.counter}   
             Learn React
            <h2>Hello {this.props.name}</h2>
            <App2 />
        </header>
      </div>
    );
  }
}

class App2 extends Component {
  constructor(){
    super();
    this.state = {
      counter: 0
    }
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  incCounter(){
    store.dispatch({type: "INCREMENT"})
  }
  decCounter(){
      store.dispatch({type: "DECREMENT"})
  }
  render() {
    return (
      <div className="App2">
        <header className="App2-header">
          <button onClick={this.incCounter.bind(this)} >increment</button>       
          <button onClick={this.decCounter.bind(this)} >decrement</button>       
         
          <h1>abc</h1>
          {this.state.counter}
        </header>
      </div>
    );
  }
}

export default App;
