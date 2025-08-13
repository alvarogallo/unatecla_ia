const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/chat', (req, res) => {
  // Puedes validar la pregunta aquí si quieres
  res.json({ respuesta: 'Hola' });
});

// O si quieres permitir POST también
app.post('/api/chat', (req, res) => {
  const pregunta = req.body.pregunta || '';
  // Aquí puedes hacer que solo responda si hace referencia a tu sitio
  res.json({ respuesta: 'Hola' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
