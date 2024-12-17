import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

export default function InputTodo() {

    const dispatch = useDispatch();

    const[textTodo, setTextTodo] = useState('');

    const onClickAddTodo = () => {
        dispatch(addTodo(textTodo));
        setTextTodo('');
    }

    return (<div>
        <input type="text" placeholder="Add Todo..." onChange={(e) => setTextTodo(e.target.value)} value={textTodo} />
        <button onClick={() => onClickAddTodo()}>Add</button>
    </div>)
} 