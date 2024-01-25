import React from "react";

const Todo = ({ data }) => {
    return (
        <div className="todo-item">
            <p>Title: {data.title}</p>
            <p>Done: {data.done ? "Yes" : "No"}</p>
        </div>
    );
};

export default Todo;