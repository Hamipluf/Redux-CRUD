import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from '../features/task/taskSlice';
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom';


function TaskForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector(state => state.tasks);

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
    if (params.id) {
      dispatch(updateTask(task))
    } else {
      dispatch(addTask({
        ...task,
        id: uuid(),
      }));
    }
    navigate('/'); // Al agregar la tarea me lleva a la ruta inicial
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find(task => task.id === params.id)) //verifico si los parametros de la ruta posee el mismo id que contiene el etado y lo establesco
    }
  }, [params.id, tasks])

  return (
    <div >
      <h1 className='text-5xl font-bold p-5'>Create Task</h1>
      <form className='grid grid-cols-1 justify-items-center' onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name='title'
          placeholder='Name Task'
          onChange={handleTask}
          value={task.title}
          className="m-5 p-5 input input-bordered input-primary w-full max-w-xs"
        >
        </input>
        <textarea
          required
          name='description'
          placeholder='Desription of your task'
          onChange={handleTask}
          value={task.description}
          className="m-5 px-10 text-lg textarea textarea-accent"
        >
        </textarea>
        <button className='btn btn-outline btn-primary' type="submit">Save your task</button>
      </form>
    </div>
  )
}

export default TaskForm