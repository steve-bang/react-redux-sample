import { legacy_createStore as createStore } from 'redux';
import { generateUUID } from "../util/Guid";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes";

const initialState = {
  todos: [],
};

 const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: generateUUID(), text: action.payload, completed: false },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return false;
  }
};


const store = createStore(todoReducer);
export default store;