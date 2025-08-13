const express = require('express');
const app = express();

app.use(express.json()); // Para parsear JSON en las solicitudes


// Endpoint para recibir preguntas
app.get('/api/chat', (req, res) => {
  // Aquí simplemente respondemos con "Hola mundo"
  res.json({ respuesta: 'Hola mundo' });
});

// El servidor escucha en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
