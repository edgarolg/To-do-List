import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task[0]}</li> // Título de la tarea
      ))}
    </ul>
  );
};

export default TaskList;
