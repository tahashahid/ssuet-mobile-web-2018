import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from "redux";
function fn (state = {counter: 0}, action){
  let newState = {...state};
  console.log(action.num);
  switch(action.type){
    case "Increment":
      newState.counter = state.counter +1;
    break;
    case "Decrement":
      newState.counter = state.counter -1;
    break;
    default:
      return newState;
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
      console.log(store.getState())
      this.setState({counter: store.getState().counter})
    })
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
        {this.state.counter}
        test
        <App2/>
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
    store.dispatch({type: "Increment"})
  }
  decCounter(){
      store.dispatch({type: "Decrement"})
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
