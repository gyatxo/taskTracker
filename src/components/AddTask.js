import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [task, setTask] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const handleSubmit=(e)=> {
        e.preventDefault()

        if(!task){
            alert('Please add task')
            return
        }

        addTask({task,day,reminder})

        setTask('')
        setDay('')
        setReminder(false)
    }
    return (
        <form 
        className='add-form'
        onSubmit={handleSubmit}
        >
            <div className='form-control'>
                <label>Add Task</label>
                <input type='text' value={task} onChange={(e) => setTask(e.target.value)} placeholder='Add Task'/>
            </div>
            <div className='form-control'>
                <label>Add Day & Times</label>
                <input type='text' value={day} onChange={(e)=> setDay(e.target.value)} placeholder='Add Day & Times'/>
            </div>
            <div className='form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type='submit' value={'Save Task'} className='btn btn-block'/>
        </form>
    )
}

export default AddTask