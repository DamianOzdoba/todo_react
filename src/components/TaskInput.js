import React from 'react';

function TaskInput({value, handleInput, handleAddTask}) {
    return (
        <input
            type='text'
            value={value}
            onChange={handleInput}
            onKeyUp={handleAddTask}
        />
    );
}

export default TaskInput;