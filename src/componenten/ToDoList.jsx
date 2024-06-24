import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos }) => {
    return (
        <ul className="mt-4">
            {todos.map((todo, index) => (
                <ToDoItem key={index} todo={todo} />
            ))}
        </ul>
    );
};

export default ToDoList;