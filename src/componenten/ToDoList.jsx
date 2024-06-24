import React from 'react';
import ToDoItem from './ToDoItem.jsx';

const ToDoList = ({ todos }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <ToDoItem key={index} todo={todo} />
            ))}
        </ul>
    );
};

export default ToDoList;
