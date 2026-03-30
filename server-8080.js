const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const http = require('http');

const app = express();
const PORT = process.env.PORT || 8080;

// Enable CORS for all origins
app.use(cors({
  origin: ['http://localhost:8080', 'http://127.0.0.1:8080', 'file://'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Serve static files from current directory
app.use(express.static(__dirname, {
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

// Secure API endpoint to serve environment variables
app.get('/api/env', (req, res) => {
  try {
    console.log('🔑 API endpoint accessed - serving environment variables');
    
    // Read .env file
    const envPath = path.join(__dirname, '.env');
    const envContent = fs.readFileSync(envPath, 'utf8');
    
    // Parse .env file
    const envVars = {};
    const lines = envContent.split('\n');
    
    lines.forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        envVars[key.trim()] = valueParts.join('=').trim();
      }
    });
    
    // Only send API-related variables (security)
    const safeEnv = {
      API: envVars.API || null,
      API2: envVars.API2 || null,
      API3: envVars.API3 || null
    };
    
    // Log what we're sending (without exposing actual keys)
    console.log('🔐 Serving API keys:', {
      API: safeEnv.API ? '[SET]' : '[NOT SET]',
      API2: safeEnv.API2 ? '[SET]' : '[NOT SET]',
      API3: safeEnv.API3 ? '[SET]' : '[NOT SET]'
    });
    
    res.json(safeEnv);
  } catch (error) {
    console.error('❌ Error reading .env:', error);
    res.status(500).json({ error: 'Failed to load environment variables' });
  }
});

// Chat API endpoint (placeholder - you can implement real AI logic here)
app.post('/api/chat', (req, res) => {
  try {
    console.log('💬 Chat endpoint accessed');
    const { message, model } = req.body;
    
    // TODO: Implement actual AI logic here
    // For now, return a placeholder response
    setTimeout(() => {
      res.json({
        response: `AI Response to: "${message}" (Model: ${model})`,
        model: model,
        timestamp: new Date().toISOString(),
        success: true
      });
    }, 1000); // Simulate processing time
    
  } catch (error) {
    console.error('❌ Chat API error:', error);
    res.status(500).json({ error: 'Failed to process message' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

// Catch-all handler - serve index.html for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Create HTTP server
const server = http.createServer(app);

server.listen(PORT, '0.0.0.0', () => {
  console.log('🚀 Static server running on:');
  console.log(`   🌐 Local: http://localhost:${PORT}`);
  console.log(`   🌐 Network: http://0.0.0.0:${PORT}`);
  console.log('');
  console.log('🔑 Environment variables loaded from .env file');
  console.log(`🤖 API endpoint: http://localhost:${PORT}/api/env`);
  console.log(`💬 Chat endpoint: http://localhost:${PORT}/api/chat`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
  console.log('');
  console.log('📂 Serving static files from:', __dirname);
  console.log('✅ Ready for AI chat!');
});
