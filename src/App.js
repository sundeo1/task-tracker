import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'July 1st at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Grocery Shopping',
      day: 'July 1st at 6:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Meeting at School',
      day: 'July 4th at 2:30pm',
      reminder: false,
    }
  ])
  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*1000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id ===id ?{...task, reminder: !task.reminder}:task))
  }
  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder}/>) : 'No Tasks To Show'
      }
    </div>
  );
}

export default App;
