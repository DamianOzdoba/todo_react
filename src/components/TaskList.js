import React from 'react';
import TaskItem from "./TaskItem";

function TaskList({tasks, status, changeStatus, removeTask}) {
    return (
        <ul>
            {tasks
                .filter((task) => status === 'all' ? true : task.status === status)
                .map((task) =>
                <TaskItem key={task.id} task={task} changeStatus={changeStatus} removeTask={removeTask}/>)}
        </ul>
    );
}

export default TaskList;