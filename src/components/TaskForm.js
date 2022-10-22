import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../features/task/taskSlice';
import {v4 as uuid} from 'uuid'

function TaskForm() {
  const dispatch = useDispatch()
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const handleTask = e => {
    setTask({
      ...task, //selecciono todos los campos 
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTask({
      ...task,
      id: uuid(),
  }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name='title'
          placeholder='Name Task'
          onChange={handleTask}>
        </input>
        <textarea
          name='description'
          placeholder='Desription of your task'
          onChange={handleTask}>
        </textarea>
        <button type="submit">Save you task</button>
      </form>
    </div>
  )
}

export default TaskForm