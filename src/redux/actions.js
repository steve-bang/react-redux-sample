import { ADD_TODO, TOGGLE_STATUS, DELETE_TODO } from "./actionTypes";

// Action creators
export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text,
  });
  
  export const removeTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
  });
  
  export const toggleTodo = (id) => ({
    type: TOGGLE_STATUS,
    payload: id,
  });