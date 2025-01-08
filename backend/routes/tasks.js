 // Rutas relacionadas con tareas

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/serverTest', taskController.serverTest);
router.get('/allTasks', taskController.getAllTasks);
router.post('/createTask', taskController.createTask);

module.exports = router;
