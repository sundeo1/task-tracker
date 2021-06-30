import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'July 1st at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Grocery Shopping',
        day: 'July 1st at 6:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Meeting at School',
        day: 'July 4th at 2:30pm',
        reminder: false,
    }
])
  return (
    <div className="container">
      <Header/>
      <Tasks tasks = {tasks}/>
    </div>
  );
}

export default App;
