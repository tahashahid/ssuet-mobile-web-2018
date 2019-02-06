import React, { Component } from "react";
import { connect } from "react-redux";
import { ADDTODO } from "./actionTypes";
class AddTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: ""
    }
  }
  addTodo(){
    this.props.addTodo(this.state.input);
  }
  handleChange(e){
    this.setState({input: e.target.value})
  }
  render() {
    
    return <div>
      <input type="text" onChange={this.handleChange.bind(this)}/>
      <button onClick={this.addTodo.bind(this)}>submit</button>
    </div>
  }
}
let id = 0;
export default connect(
  null,
  {addTodo: (content) =>{
    return {
      type: ADDTODO,
      payload: {
      id: id++,
      content: content 
    }}
  }}
)(AddTodo);