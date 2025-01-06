// Controladores de tareas

const googleSheets = require('../services/googleSheets');

module.exports = {
  async getAllTasks(req, res) {
    try {
      const tasks = await googleSheets.getTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Error obteniendo las tareas' });
    }
  },
  async createTask(req, res) {
    try {
      const task = req.body;
      await googleSheets.addTask(task);
      res.status(201).json({ message: 'Tarea añadida correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error creando la tarea' });
    }
  },
};