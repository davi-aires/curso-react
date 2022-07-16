import React from "react";

import Task from "./Task";

const Tasks = ({ tasks , handleTaskClick, handleTaskDeletion}) => {
    return (
        <>
            {
                tasks.map(task => (
                    //<div className="task-container">{task.title}</div> mas é melhor colocar em outro arquivo
                    <Task
                        key={task.id}
                        task={task}
                        handleTaskClick={handleTaskClick}
                        handleTaskDeletion={handleTaskDeletion}
                    ></Task>
                ))
            }
        </>
    )
}

export default Tasks;