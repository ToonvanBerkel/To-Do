import React, { useState } from 'react';
import CreateToDo from './componenten/CreateToDo';
import ToDoList from './componenten/ToDoList';

const App = () => {
    const [todos, setTodos] = useState([]);

    const addToDo = (todo) => {
        setTodos([...todos, todo]);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 shadow-md rounded">
            <h1 className="text-2xl font-bold text-center">Mijn To Do Lijst</h1>
            <CreateToDo addToDo={addToDo} />
            <ToDoList todos={todos} />
        </div>
    );
};

export default App;