import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, toggleReminder}) => {
    return (
        <div 
            className={`task ${task.reminder && 'reminder'}`}
            
        >
            <h3>{task.task} 
                <FaTimes 
                    style={{color: 'red', cursor: "pointer"}}
                    onClick={()=> onDelete(task.id)}
                />
            </h3>
            <p onClick={() => toggleReminder(task.id)}>{task.day}</p>
        </div>
    )
}

export default Task