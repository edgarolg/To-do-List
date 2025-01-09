const mongoose = require('mongoose');

// URL de conexión a MongoDB
const mongoURI = "mongodb+srv://edgarfera01:E0gfvHmz2mjv8jIo@tasks.hibzl.mongodb.net/?retryWrites=true&w=majority&appName=Tasks"; // Cambia "tareasDB" al nombre que prefieras

// Conexión
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB conectado exitosamente");
  } catch (err) {
    console.error("Error al conectar a MongoDB", err.message);
    process.exit(1); // Detener el proceso si hay error
  }
};

module.exports = connectDB;
