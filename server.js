const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const http = require('http');

const app = express();

// Port configuration with fallback logic
let PORT = parseInt(process.env.PORT || process.argv[2] || 3000);

// Function to find available port
function findAvailablePort(startPort) {
  return new Promise((resolve, reject) => {
    const testPort = parseInt(startPort);
    const server = http.createServer();
    
    server.listen(testPort, '0.0.0.0', () => {
      server.close();
      resolve(testPort);
    });
    
    server.on('error', () => {
      if (testPort < 65535) {
        resolve(findAvailablePort(testPort + 1));
      } else {
        reject(new Error('No available ports found'));
      }
    });
  });
}

// Enable CORS for all origins (will be updated with actual port)
app.use(cors({
  origin: ['http://localhost:' + PORT, 'http://127.0.0.1:' + PORT, 'file://'],
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
    console.log('📂 Looking for .env file at:', envPath);
    console.log('📂 .env file exists:', fs.existsSync(envPath));
    
    if (!fs.existsSync(envPath)) {
      console.log('❌ .env file not found at:', envPath);
      return res.status(404).json({ error: '.env file not found' });
    }
    
    const envContent = fs.readFileSync(envPath, 'utf8');
    console.log('📄 .env file content length:', envContent.length);
    
    // Parse .env file
    const envVars = {};
    const lines = envContent.split('\n');
    
    lines.forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        envVars[key.trim()] = valueParts.join('=').trim();
      }
    });
    
    console.log('🔍 Parsed environment variables:', Object.keys(envVars));
    
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
    
    if (!message || !model) {
      return res.status(400).json({ error: 'Message and model are required' });
    }
    
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

// Start server with port conflict handling
async function startServer() {
  try {
    const requestedPort = parseInt(process.env.PORT || process.argv[2] || 3000);
    PORT = await findAvailablePort(requestedPort);
    
    // Update CORS with actual port
    app.use(cors({
      origin: ['http://localhost:' + PORT, 'http://127.0.0.1:' + PORT, 'file://'],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }));
    
    // Create HTTP server
    const server = http.createServer(app);
    
    server.listen(PORT, '0.0.0.0', () => {
      console.log('🚀 ULTIMATEUNBLOCKER Server Started Successfully!');
      console.log('');
      console.log('🌐 Server Information:');
      console.log(`   📍 Local: http://localhost:${PORT}`);
      console.log(`   🌐 Network: http://0.0.0.0:${PORT}`);
      console.log(`   📂 Serving: ${__dirname}`);
      console.log('');
      console.log('🔑 API Endpoints:');
      console.log(`   🤖 Environment: http://localhost:${PORT}/api/env`);
      console.log(`   💬 Chat API: http://localhost:${PORT}/api/chat`);
      console.log(`   🏥 Health Check: http://localhost:${PORT}/api/health`);
      console.log('');
      console.log('📖 Usage:');
      console.log(`   npm start                    - Port 3000 (default)`);
      console.log(`   npm start 8080              - Port 8080 (or next available)`);
      console.log(`   npm start [PORT]             - Custom port`);
      console.log('');
      console.log('✅ Ready for AI chat with secure API key loading!');
    });
    
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

// Start the server
startServer();
