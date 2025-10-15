import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import { getCitation } from './api.js';

const app = express();
app.use(cors()); // autorise ton front à appeler ton backend
app.use(express.static('public')); // sert tes fichiers front

app.get('/api/quote', async (req, res) => {
  try {
   const data = await getCitation(); // on utilise notre fonction réutilisable
    res.json(data); // renvoie les données au front
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de la citation.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server prêt sur port ${PORT}`));