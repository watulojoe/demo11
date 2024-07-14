import React from 'react'
import { useState } from 'react'

function AddTask({onAdd}) {

    // variables form the form
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    // adding the new task filled from the form 
    const onSubmit = (e) => {
        e.preventDefault()

        // send alert if the form is submitted b4 being filled
        //NOTE: this is only for the task( not day and reminder)
        if (!text) {
            alert("please add a task")
            return
        }

        onAdd({ text, day, reminder })  // adding the task

        // clear the data after submitting 
        setText("")
        setDay("")
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' value={text} onChange={(e) => (setText(e.target.value))} placeholder='Add Task'/>
        </div>
        <div className='form-control'>
            <label>Day</label>
            <input type='text' value={day} onChange={(e) => (setDay(e.target.value))}  placeholder='Add Day and Time'/>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} placeholder='Add Task'/>
        </div>
        <input className='btn btn-block' type='submit' value='Save Task'/>
    </form>
  )
}

export default AddTask