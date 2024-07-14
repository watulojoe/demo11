import React from 'react'
import Button from './Button'

function Task({task, onDelete, onToggle}) {
  return (
    <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() => (onToggle(task.id))}>
        <h3>{task.text}</h3>
        <small>{task.day}</small>
        <Button onClick={() => (onDelete(task.id))} color='red' title='del'/>
    </div>
  )
}

export default Task