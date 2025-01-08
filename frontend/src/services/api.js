import httpClient from './httpClient';


export const getTasks = async () => {
  const response = await httpClient.get('/allTasks');
  return response.data;
};

export const createTask = async (task) => {
  await httpClient.post('/createTask', task);
};
