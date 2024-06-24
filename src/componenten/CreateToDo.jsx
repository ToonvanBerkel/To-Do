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
        <form onSubmit={handleSubmit} className="flex justify-center mt-4">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Wat te doen?"
                className="p-2 border border-gray-300 rounded"
            />
            <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">Toevoegen</button>
        </form>
    );
};

export default CreateToDo;