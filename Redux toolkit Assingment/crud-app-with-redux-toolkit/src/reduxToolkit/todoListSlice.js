import { createSlice } from '@reduxjs/toolkit';

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    completeTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = true;
      }
    },
    deleteTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addTask, completeTask, deleteTask } = todoListSlice.actions;

export default todoListSlice.reducer;