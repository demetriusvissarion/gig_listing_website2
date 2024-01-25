import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const TodoList = (props) => {

    useEffect(() => {
        const URL = `http://127.0.0.1:5000/todos/${props.todo_title}`;
        fetch(URL)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                // console.log("Raw Data:", data); // Log raw data
                props.setTodos([data]);
            })
            .catch((error) => console.error("Error fetching todos:", error));
    }, [props.todo_title]);
    
    return (
        <>
        <h2>TODO List:</h2>
        <div className="todo-list">
            {props.todos.map((todo) => (
                <Todo key={todo.title} data={todo} setTodos={props.setTodos}/>
            ))}
        </div>
        </>
    );
    };

export default TodoList;