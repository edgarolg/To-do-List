const express = require("express");
const cors = require("cors");
const { google } = require("googleapis");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Configurar las credenciales de Google
const auth = new google.auth.GoogleAuth({
    keyFile: "ruta/al/archivo-de-credenciales.json", // Cambia a la ruta del archivo JSON
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID = "TU_SHEET_ID"; // Reemplaza con el ID de tu Google Sheet


//Para verificar conexion
app.get("/api", (req, res) => {
  res.send({ message: "Hola desde el backend!" });
});


// Ruta para obtener la lista de tareas
app.get("/api/todos", async (req, res) => {
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: "Sheet1!A:B", // Cambia si tu hoja tiene otro nombre o más columnas
        });

        const rows = response.data.values || [];
        const todos = rows.map(([id, task]) => ({ id, task }));
        res.json(todos);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Ruta para agregar una tarea
app.post("/api/todos", async (req, res) => {
    const { id, task } = req.body;
    try {
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: "Sheet1!A:B",
            valueInputOption: "RAW",
            requestBody: {
                values: [[id, task]],
            },
        });

        res.status(201).send("Tarea agregada");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
