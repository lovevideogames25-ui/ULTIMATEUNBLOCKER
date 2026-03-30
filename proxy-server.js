// CORS-Safe API Proxy Server
// This server handles API calls to avoid CORS issues

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 3001; // Different port to avoid conflicts

// Enable CORS for all origins
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'file://'],
  credentials: true
}));

app.use(express.json());

// Proxy endpoint for Replicate API
app.post('/api/replicate', async (req, res) => {
  try {
    const { token, version, input } = req.body;
    
    const response = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        version: version,
        input: input
      })
    });
    
    const data = await response.json();
    res.json(data);
    
  } catch (error) {
    console.error('Replicate proxy error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Proxy endpoint for LockLLM API
app.post('/api/lockllm', async (req, res) => {
  try {
    const { token, model, messages, max_tokens, temperature } = req.body;
    
    const response = await fetch('https://api.lockllm.com/v1/proxy/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: model,
        messages: messages,
        max_tokens: max_tokens,
        temperature: temperature,
        stream: false
      })
    });
    
    const data = await response.json();
    res.json(data);
    
  } catch (error) {
    console.error('LockLLM proxy error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Status endpoint
app.get('/api/status', (req, res) => {
  res.json({ 
    status: 'running',
    timestamp: new Date().toISOString(),
    endpoints: ['/api/replicate', '/api/lockllm']
  });
});

app.listen(PORT, () => {
  console.log(`🚀 CORS-Safe API Proxy running on port ${PORT}`);
  console.log(`📡 Proxy endpoints available:`);
  console.log(`   - http://localhost:${PORT}/api/replicate`);
  console.log(`   - http://localhost:${PORT}/api/lockllm`);
  console.log(`   - http://localhost:${PORT}/api/status`);
});
