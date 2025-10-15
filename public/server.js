const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.static('public')); 

app.get('/citation', async (req, res) => {
  try {
    const response = await fetch('https://zenquotes.io/api/random');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Impossible de récupérer la citation' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serveur lancé sur port ${port}`));
