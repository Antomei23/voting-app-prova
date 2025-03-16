const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// URL dei microservizi
const SERVICE_URLS = {
  user: 'http://localhost:3001',
  questions: 'http://localhost:3002',
  voting: 'http://localhost:3003',
};

// Funzione per gestire le richieste ai microservizi
const forwardRequest = async (url, req, res) => {
  try {
    const response = await axios({
      method: req.method,
      url: url + req.url,
      data: req.body,
      headers: req.headers,
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: 'Service unavailable' });
  }
};

// Rotte per i microservizi
app.use('/user', (req, res) => forwardRequest(SERVICE_URLS.user, req, res));
app.use('/questions', (req, res) => forwardRequest(SERVICE_URLS.questions, req, res));
app.use('/voting', (req, res) => forwardRequest(SERVICE_URLS.voting, req, res));

// Avvia il server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});