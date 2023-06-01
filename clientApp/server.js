const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Autres routes et middlewares...

const port = 3000;
app.listen(port, () => {
  console.log(Serveur Express en cours d'exécution sur le port ${port});
});