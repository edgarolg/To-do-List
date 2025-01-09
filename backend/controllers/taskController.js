const Task = require('../models/Task'); // Importa el modelo

module.exports = {
  // Probar el servidor
  async serverTest(req, res) {
    res.status(200).json({ message: 'Servidor corriendo correctamente' });
  },

  // Obtener todas las tareas
  async getTasks(req, res) {
    try {
      console.log('Obteniendo tareas...');
      const tasks = await Task.find();
      console.log('Tareas obtenidas:');
      res.status(200).json(tasks);
    } catch (error) {
      console.error('Error al obtener tareas:', error);
      res.status(500).json({ error: 'Error al obtener tareas' });
    }
  },

  // Crear una nueva tarea
  async addTask(req, res) {
    try {
      console.log('Creando tarea...');
      const task = new Task(req.body); // Crea una nueva tarea con los datos del cuerpo de la solicitud
      const savedTask = await task.save(); // Guarda la tarea en la base de datos
      console.log('Tarea creada:', savedTask);
      res.status(201).json(savedTask);
    } catch (error) {
      console.error('Error al crear tarea:', error);
      res.status(400).json({ error: 'Error al crear tarea' });
    }
  },

  // Actualizar una tarea existente
  async updateTask(req, res) {
    try {
      const { id } = req.params; // Obtén el ID de la tarea de los parámetros
      const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true }); // Actualiza la tarea y devuelve la versión actualizada
      if (!updatedTask) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
      res.status(200).json(updatedTask);
    } catch (error) {
      console.error('Error al actualizar tarea:', error);
      res.status(400).json({ error: 'Error al actualizar tarea' });
    }
  },

  // Eliminar una tarea
  async deleteTask(req, res) {
    try {
      const { id } = req.params; // Obtén el ID de la tarea de los parámetros
      const deletedTask = await Task.findByIdAndDelete(id); // Elimina la tarea de la base de datos
      if (!deletedTask) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
      }
      res.status(200).json({ message: 'Tarea eliminada exitosamente' });
    } catch (error) {
      console.error('Error al eliminar tarea:', error);
      res.status(400).json({ error: 'Error al eliminar tarea' });
    }
  },
};
