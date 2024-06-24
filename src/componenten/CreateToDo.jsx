import React, { useState } from 'react';

const CreateToDo = ({ addToDo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addToDo(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Wat te doen?"
            />
            <button type="submit">Toevoegen</button>
        </form>
    );
};

export default CreateToDo;
