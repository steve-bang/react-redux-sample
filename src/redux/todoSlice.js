import { createSlice } from "@reduxjs/toolkit";
import { generateUUID } from "../util/Guid";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: generateUUID(),
                text: action.payload,
                completed: false,
            });
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload
                   ? {...todo, completed:!todo.completed}
                    : todo
            );
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id!== action.payload);
        }
    }
});

// Action creators are generated for each case reducer function
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer