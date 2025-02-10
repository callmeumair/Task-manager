import React from 'react';
import axios from 'axios';

const TaskList = ({ tasks, fetchTasks }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    fetchTasks();
  };

  const handleToggle = async (id, completed) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, { completed: !completed });
    fetchTasks();
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggle(task._id, task.completed)}
          >
            {task.title}
          </span>
          <button onClick={() => handleDelete(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;