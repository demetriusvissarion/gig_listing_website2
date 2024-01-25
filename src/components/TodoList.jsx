import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const URL = `http://127.0.0.1:5000/todos`;
        fetch(URL)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                // console.log("Raw Data:", data); // Log raw data
                setTodos(data);
            })
            .catch((error) => console.error("Error fetching todos:", error));
    }, []);
    
    return (
        <>
        <h2>TODO List:</h2>
        <div className="todo-list">
            {todos.map((todo) => (
                <Todo key={todo.title} data={todo} />
            ))}
        </div>
        </>
    );
    };

export default TodoList;