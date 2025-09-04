const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(express.json());

const HF_API_URL = 'https://api-inference.huggingface.co/models/facebook/mbart-large-50-many-to-many-mmt';
const HF_API_TOKEN = process.env.HF_API_TOKEN;

app.post('/translate', async (req, res) => {
  try {
    const { text, targetLang } = req.body;
    if (!text || !targetLang) {
      return res.status(400).json({ error: 'Both text and targetLang are required' });
    }

    // Format input for mbart model: ">>targetLang<< text"
    const inputs = `>>${targetLang}<< ${text}`;

    const response = await fetch(HF_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HF_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Hugging Face API error:', data);
      return res.status(500).json({ error: data.error || 'API request failed' });
    }

    res.json({ translation: data[0].translation_text });
  } catch (error) {
    console.error('Translation error:', error);
    res.status(500).json({ error: 'Translation failed' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Translation backend running on port ${PORT}`);
});
