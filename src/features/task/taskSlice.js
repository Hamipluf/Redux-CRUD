import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,

  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  }
]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    },
    updateTask: (state, action) => {
      const { id, title, description } = action.payload
      const findtask = state.find(task => task.id === id)

      if (findtask) {
        findtask.title = title
        findtask.description = description
      }
    },
    deleteTask: (state, action) => {
      const foundTask = state.find(task => task.id === action.payload);
      if (foundTask) {
        state.splice(state.indexOf(foundTask), 1) // primer parametro indice, segundo parametro la cantidad que se desea eliminar
      }
    },

  }
})


export const { addTask, deleteTask, updateTask } = taskSlice.actions

export default taskSlice.reducer