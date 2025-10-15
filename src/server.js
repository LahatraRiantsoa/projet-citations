const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');
const getCitation = require('./api');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/quote', async (req, res) => {
  try {
    const data = await getCitation();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération de la citation.' });
  }
});

app.listen(process.env.PORT || 3000, () => console.log('Server prêt'));
