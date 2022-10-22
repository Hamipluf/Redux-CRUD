import React from 'react';
import './App.css';
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
function App() {

  return (
    <div className="App">
      <h1>HOLA PUTOS</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
