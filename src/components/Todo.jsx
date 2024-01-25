import React from "react";
import "./Todo.css";

const Todo = ({ data, setTodos }) => {
    const handleCheckboxChange = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
            todo.title === data.title ? { ...todo, done: !todo.done } : todo
            )
        );
    };
        
    return (
        <div className="todo-item">
            <table>
            <thead>
                <tr>
                <th>Title</th>
                <th>Done</th>
                <th>Mark as Done</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>{data.title}</td>
                <td>{data.done ? "Yes" : "No"}</td>
                <td>
                    <input
                    type="checkbox"
                    checked={data.done}
                    onChange={handleCheckboxChange}
                    />
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default Todo;