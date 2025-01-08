import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api/ToDoList', // URL base común para todas las rutas
});

export default httpClient;
