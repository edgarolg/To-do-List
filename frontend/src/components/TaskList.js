import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/api';

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
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task[0]}</li> // Ajusta según la estructura de los datos
      ))}
    </ul>
  );
};

export default TaskList;
