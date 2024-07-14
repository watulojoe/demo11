import AddTask from "./components/AddTask";
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState( [
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Feb 5th 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'Feb 6th 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food shopping',
        day: 'Feb 6th 3:30pm',
        reminder: false
    },    
  ])

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() *10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    // console.log(task)
  }

  // delete a task
  const deleteTask = (id) => {
    setTasks(
      tasks.filter(
        (task) => (task.id !== id)
      )
    )
    console.log('deleted', id)
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map(
        (task) => (
          task.id === id ? {...task, reminder: !task.reminder} : task
        )
      )
    )
    console.log('Toggle', id)

  }

  return (
    <main className="container">
      <Header title="hello joe"/>
      <AddTask onAdd={addTask}/>
      <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/>
    </main>
  );
}

export default App;
