import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, completeTask, deleteTask } from './todoListSlice';

const TodoList = () => {
  const [taskText, setTaskText] = useState('');
  const todoList = useSelector(state => state.todoList);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText) {
      dispatch(addTask(taskText));
      setTaskText('');
    }
  };

  const handleCompleteTask = taskId => {
    dispatch(completeTask(taskId));
  };

  const handleDeleteTask = taskId => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <input type="text" value={taskText} onChange={e => setTaskText(e.target.value)} />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {todoList.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => handleCompleteTask(task.id)} />
            <span>{task.text}</span>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;