import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;
    await axios.post('http://localhost:5000/api/tasks', { title });
    setTitle('');
    fetchTasks();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;