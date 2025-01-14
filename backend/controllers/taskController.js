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

  // Obtener tareas por estado
  async getTasksByStatus(req, res) {
    try {
      const { status } = req.query; 

      // Validar que se proporcione el estado
      if (!status) {
        return res.status(400).json({ error: 'El parámetro "status" es requerido' });
      }

      console.log(`Obteniendo tareas con estado: ${status}`);

      // Filtrar tareas según el estado
      const tasks = await Task.find({ status });

      if (tasks.length === 0) {
        return res.status(404).json({ message: `No se encontraron tareas con el estado: ${status}` });
      }
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

// Actualizar título, estado, descripción, deadline y tags de una tarea
async updateTaskDetails(req, res) {
  try {
    const { id } = req.params; // Obtén el ID de la tarea
    const { title, status, description, deadline, tags } = req.body; // Obtén los campos a actualizar

    // Validar que al menos uno de los campos esté presente
    if (!title && !status && !description && !deadline && !tags) {
      return res.status(400).json({ error: 'Al menos uno de los campos (title, status, description, deadline, tags) es requerido para actualizar' });
    }

    // Construir un objeto con los campos a actualizar
    const fieldsToUpdate = {};
    if (title !== undefined) fieldsToUpdate.title = title;
    if (status !== undefined) fieldsToUpdate.status = status;
    if (description !== undefined) fieldsToUpdate.description = description;
    if (deadline !== undefined) fieldsToUpdate.deadline = deadline;
    if (tags !== undefined) fieldsToUpdate.tags = tags;

    // Actualizar la tarea en la base de datos
    const updatedTask = await Task.findByIdAndUpdate(id, fieldsToUpdate, { new: true });
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
