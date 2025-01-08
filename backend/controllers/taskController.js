// Controladores de tareas
const googleSheets = require('../services/googleSheets');

module.exports = {
  async serverTest(req, res) {
    try {
      await googleSheets.serverTest(req, res);
    } catch (error) {
      res.status(500).json({ error: 'Error en el servidor' });
    }
  },
  async getAllTasks(req, res) {
    try {
      const tasks = await googleSheets.getTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Error obteniendo las tareass' });
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