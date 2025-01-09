import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:5000/api/tasks', // URL base común para todas las rutas
});

export default httpClient;
