import React from 'react'
import Task from './Task'

function Tasks({tasks, onDelete, onToggle}) {

  return (
    <div>
        {tasks.map(
            (task) => (
            <Task key={task.id} task={task} onToggle={onToggle} onDelete={onDelete}/>
            )
        )}
    </div>
  )
}

export default Tasks