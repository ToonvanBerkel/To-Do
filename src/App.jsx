import React, { useState } from 'react';
import CreateToDo from './componenten/CreateToDo.jsx';
import ToDoList from './componenten/ToDoList.jsx';

const App = () => {
    const [todos, setTodos] = useState([]);

    const addToDo = (todo) => {
        setTodos([...todos, todo]);
    };

    return (
        <div>
            <h1>Mijn To Do Lijst</h1>
            <CreateToDo addToDo={addToDo} />
            <ToDoList todos={todos} />
        </div>
    );
};

export default App;