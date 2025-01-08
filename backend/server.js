const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

require('dotenv').config();


const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/tasks', taskRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto: ${PORT}`));
