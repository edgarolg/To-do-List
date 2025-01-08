// Funciones para interactuar con la API
const { google } = require('googleapis');
const path = require('path');
require('dotenv').config();
const credentialsPath = process.env.GOOGLE_SHEETS_CREDENTIALS;

if (!credentialsPath) {
  console.log('La ruta de las credenciales no está configurada en GOOGLE_SHEETS_CREDENTIALS', process.env.GOOGLE_SHEETS_CREDENTIALS);
  throw new Error('La ruta de las credenciales no está configurada en GOOGLE_SHEETS_CREDENTIALS');
}

const credentials = require(path.resolve(credentialsPath));
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

const spreadsheetId = process.env.SPREADSHEET_ID;
if (!spreadsheetId) {
  throw new Error('El ID de la hoja de cálculo no está configurado en SPREADSHEET_ID');
}

module.exports = {
  async serverTest(req, res) {
    res.status(200).json({ message: 'Servidor corriendo correctamente' });
  },
  async getTasks() {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'ToDoList!A1:F',
    });
    return response.data.values || [];
  },
  async addTask(task) {
    const {id, title, description, deadline, tags, status} = task;
    sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'ToDoList!A:F',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[id, title, description, deadline, tags, status]],
      },
    });
  },
};
