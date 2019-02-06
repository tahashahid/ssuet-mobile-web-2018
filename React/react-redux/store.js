import { createStore } from "redux";
import { ADDTODO } from "./actionTypes";
let initialState = {todos: []};
function store(state = initialState, action){
    let newState = {...state};
    switch(action.type){
        case ADDTODO:
        // action.payload = {content: "", id: 90}; 
            newState.todos.push(action.payload);
        break;
        default:
        break; 
    }
    console.log(newState);
    return newState;
}

export default createStore(store);









