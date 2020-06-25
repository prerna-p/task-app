import React from 'react'

const TaskForm = () => {
  return (
    <form className="form">
      <input type="text"
        className="task-input"
        placeholder="Add task.."
        required></input>
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          add task
        </button>
        <button className="btn clear-btn">
          clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm
