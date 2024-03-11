import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: 'Doctor Appointment',
      day: 'Friday 1pm',
      reminder: false
    },
    {
      id: 2,
      task: 'Eye Appointment',
      day: 'Friday 2pm',
      reminder: true
    },
    {
      id: 3,
      task: 'Job Appointment',
      day: 'Friday 3pm',
      reminder: false
    },
    {
      id: 4,
      task: 'Work Appointment',
      day: 'Friday 4pm',
      reminder: true
    }
  ])
  const [showAddTask, setShowAddTask] = useState(false)

  // add task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}

    setTasks([...tasks, newTask])
  }

  // delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => 
      task.id !== id 
    ))
  }

  // toggle reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task
    ))
  }

  return (
    <div className="container">
      <Header title={"Task Tracker"} showAddTask={showAddTask} onAdd={()=> setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask addTask={addTask}/>}
      {tasks.length > 0 ?
      <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder}/>
      : 'No Task to Show.' }
    </div>
  );
}

export default App;
