import React from 'react'
import { useSelector } from 'react-redux'

function TaskList() {
  const Statetask = useSelector(state => state.tasks);
  console.log(Statetask)
  return (
    <div>
      {Statetask.map(task => (
        <div key={task.id}> 
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  )
}

export default TaskList