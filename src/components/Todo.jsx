import { useDispatch, useSelector } from "react-redux";

import InputTodo from "./InputTodo";
import { deleteTodo, toggleTodo } from "../redux/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todoList.todos);    

    const dispatch = useDispatch();

    return (<>

        <InputTodo />

        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo.text} 
                    <input type="checkbox" name="complete" checked={todo.complete} onChange={(e) => dispatch(toggleTodo(todo.id))} />
                    <button onClick={() => dispatch(deleteTodo(todo.id))}>Remove</button>
                </li>
            ))}
        </ul>
    </>);
}