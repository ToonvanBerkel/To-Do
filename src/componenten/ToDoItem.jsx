import React from 'react';

const ToDoItem = ({ todo }) => {
    return (
        <li className="border-b border-gray-200 py-2 text-center">{todo}</li>
    );
};

export default ToDoItem;