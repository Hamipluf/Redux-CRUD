import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteTask } from '../features/task/taskSlice';

function TaskList() {
  const Statetask = useSelector(state => state.tasks);
  const dispatch = useDispatch();


  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }
  return (
    <div className='grid grid-cols-2 items-center w-full overflow-hidden'>
      <header className='self-start p-5 pt-10'>
        {/* cuenta las tareas */}
        <h1 className='text-5xl font-black p-5 '>Counter Task: {Statetask.length}</h1>
        <Link className='btn btn-lg btn-info m-5' to={'/create-task'}>
          Add task
        </Link>
      </header>
      <div className='p-10 w-11/12 m-auto'>
        <h2 className='text-3xl font-extrabold underline text-left'>Task list :</h2>
        {Statetask.map(task => (
          <div className='w-11/12' key={task.id}>
            <h3 className='text-2xl text-left p-5 font-semibold'>{task.title} :</h3>
            <p className='text-center '>{task.description}</p>
            <button className='m-5 btn btn-outline btn-error' onClick={() => handleDelete(task.id)}>Delete</button>
            <Link className='btn btn-outline btn-success' to={`/edit-task/${task.id}`}>Edit</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList