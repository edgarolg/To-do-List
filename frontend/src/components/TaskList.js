import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/api';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        console.log('Intentando obtener las tareasssss');
        const data = await getTasks();
        console.log('tareas obtenidas', data);
        setTasks(data);
      } catch (error) {
        console.error('Error cargando las tareas:', error);
        setError('No se pudieron cargar las tareas.');
      }
    };
    fetchTasks();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Status</th>
          <th>Title</th>
          <th>Description</th>
          <th>Deadline</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id} className={`task${task.id}`}>
            <td>{task.status}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.deadline}</td>
            <td>{task.tags.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
