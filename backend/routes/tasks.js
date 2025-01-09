// Rutas relacionadas con tareas
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/test', taskController.serverTest); // Probar el servidor
router.get('/allTasks', taskController.getTasks);       // Obtener todas las tareas
router.post('/newTask', taskController.addTask);       // Crear una nueva tarea
router.put('/:id', taskController.updateTask);  // Actualizar una tarea por ID
router.delete('/:id', taskController.deleteTask); // Eliminar una tarea por ID

module.exports = router;
