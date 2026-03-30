const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'file://'],
  credentials: true
}));

// Serve static files
app.use(express.static(__dirname));

// API endpoint to serve environment variables
app.get('/api/env', (req, res) => {
  try {
    console.log('🔑 Loading environment variables from .env file');
    
    const envPath = path.join(__dirname, '.env');
    
    if (!fs.existsSync(envPath)) {
      console.log('❌ .env file not found');
      return res.status(404).json({ 
        error: '.env file not found',
        path: envPath,
        message: 'Please create a .env file with your API keys'
      });
    }
    
    const envContent = fs.readFileSync(envPath, 'utf8');
    const envVars = {};
    
    envContent.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        envVars[key.trim()] = valueParts.join('=').trim();
      }
    });
    
    const safeEnv = {
      API: envVars.API || null,
      API2: envVars.API2 || null,
      API3: envVars.API3 || null
    };
    
    console.log('✅ Environment variables loaded successfully');
    console.log('🔐 API keys status:', {
      API: safeEnv.API ? 'SET' : 'NOT SET',
      API2: safeEnv.API2 ? 'SET' : 'NOT SET',
      API3: safeEnv.API3 ? 'SET' : 'NOT SET'
    });
    
    res.json(safeEnv);
  } catch (error) {
    console.error('❌ Error loading .env:', error);
    res.status(500).json({ error: 'Failed to load environment variables' });
  }
});

// Chat API endpoint
app.post('/api/chat', express.json(), async (req, res) => {
  try {
    const { message, model } = req.body;
    console.log('💬 Chat request received:', { message, model });
    
    // Load API keys from .env
    const envPath = path.join(__dirname, '.env');
    const envContent = fs.readFileSync(envPath, 'utf8');
    const envVars = {};
    
    envContent.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        envVars[key.trim()] = valueParts.join('=').trim();
      }
    });
    
    const openRouterKey = envVars.API;
    const hfToken = envVars.API2;
    const replicateToken = envVars.API3;
    const lockllmToken = envVars.API4;
    
    let aiMessage = '';
    let apiUsed = '';
    
    // Try OpenRouter first with model selection
    if (openRouterKey) {
      try {
        console.log('🔄 Trying OpenRouter API...');
        
        // Map model names to OpenRouter model IDs
        const modelMap = {
          'gpt-oss-20b': 'openai/gpt-oss-20b:free',
          'gpt-oss-120b': 'openai/gpt-oss-120b:free',
          'gemma-3-4b': 'google/gemma-3-4b-it:free',
          'gemma-3-12b': 'google/gemma-3-12b-it:free',
          'gemma-3-27b': 'google/gemma-3-27b-it:free',
          'auto': 'google/gemma-3-27b-it:free' // AUTO defaults to GEMMA-3-27B
        };
        
        // Handle AUTO model selection
        let selectedModel = modelMap[model] || 'openai/gpt-oss-20b:free';
        if (model === 'auto') {
          // For AUTO, prioritize GEMMA-3-27B
          selectedModel = 'google/gemma-3-27b-it:free';
          console.log('🤖 AUTO mode: Defaulting to GEMMA-3-27B for optimal performance');
        }
        console.log(`🎯 Using model: ${selectedModel} for request: ${model}`);
        
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openRouterKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'http://localhost:3000',
            'X-Title': 'Neural Nexus AI'
          },
          body: JSON.stringify({
            model: selectedModel,
            messages: [
              {
                role: 'user',
                content: message
              }
            ],
            max_tokens: model === 'gpt-oss-120b' ? 2000 : 1000,
            temperature: 0.7,
            stream: false
          })
        });
        
        if (!response.ok) {
          throw new Error('OPENROUTER_FAILED'); // Trigger fallback for any error
        }
        
        const data = await response.json();
        aiMessage = data.choices?.[0]?.message?.content || data.choices?.[0]?.text || '';
        if (!aiMessage) {
          console.log('🔍 OpenRouter response structure:', JSON.stringify(data, null, 2));
        }
        apiUsed = 'OpenRouter';
        console.log('✅ OpenRouter API successful');
        
      } catch (error) {
        console.log('❌ OpenRouter failed:', error.message);
        // Continue to Replicate fallback for any error
        console.log('🔄 Falling back to Replicate API...');
      }
    }
    
    // Fallback to Replicate if OpenRouter failed
    if (!aiMessage && replicateToken) {
      try {
        console.log('🔄 Trying Replicate API...');
        
        // Map model names to Replicate model IDs
        const replicateModelMap = {
          'gpt-oss-20b': 'openai/gpt-oss-20b',
          'gpt-oss-120b': 'openai/gpt-oss-120b',
          'gemma-3-4b': 'google-deepmind/gemma-3-4b-it:00139d2960396352b671f7b5c2ece5313bf6d45fe0a052efe14f023d2a81e196',
          'gemma-3-12b': 'google-deepmind/gemma-3-12b-it:free',
          'gemma-3-27b': 'google-deepmind/gemma-3-27b-it:free',
          'auto': 'google-deepmind/gemma-3-27b-it:free' // AUTO defaults to GEMMA-3-27B
        };
        
        // Handle AUTO model selection
        let selectedReplicateModel = replicateModelMap[model] || 'openai/gpt-oss-20b';
        if (model === 'auto') {
          // For AUTO, prioritize GEMMA-3-27B
          selectedReplicateModel = 'google-deepmind/gemma-3-27b-it:free';
          console.log('🤖 AUTO mode: Defaulting to GEMMA-3-27B for optimal performance');
        }
        console.log(`🎯 Using Replicate model: ${selectedReplicateModel} for request: ${model}`);
        
        // Import Replicate
        const { Replicate } = require('replicate');
        const replicate = new Replicate({
          auth: replicateToken
        });
        
        // Handle different input formats for different models
        let input;
        
        if (model === 'gemma-3-4b') {
          // GEMMA-3-4B with vision support
          input = {
            prompt: message,
            max_tokens: 2000,
            temperature: 0.7
          };
          
          // Check if message contains image URL for vision processing
          if (message.includes('http') && (message.includes('.jpg') || message.includes('.png') || message.includes('.webp'))) {
            // Extract image URL from message
            const imageUrlMatch = message.match(/(https?:\/\/[^\s]+\.(jpg|jpeg|png|webp))/i);
            if (imageUrlMatch) {
              input.image = imageUrlMatch[1];
              input.prompt = message.replace(imageUrlMatch[1], '').trim() || "Describe this image in detail";
              console.log('🖼️ Processing image with GEMMA-3-4B vision model');
            }
          }
        } else {
          // Other models use standard format
          input = {
            prompt: message,
            max_tokens: model === 'gpt-oss-120b' ? 2000 : 1024,
            temperature: 0.7
          };
        }
        
        // Run the model with streaming support
        let fullResponse = '';
        
        if (model === 'gpt-oss-120b') {
          // Use streaming for GPT-OSS-120b
          for await (const event of replicate.stream(selectedReplicateModel, { input })) {
            fullResponse += event.toString();
          }
          aiMessage = fullResponse;
        } else {
          // Use regular run for other models
          const output = await replicate.run(selectedReplicateModel, { input });
          aiMessage = typeof output === 'string' ? output : output.join('');
        }
        
        apiUsed = 'Replicate';
        console.log('✅ Replicate API successful');
        
      } catch (error) {
        console.log('❌ Replicate failed:', error.message);
        // Continue to HuggingFace fallback
        console.log('🔄 Falling back to HuggingFace API...');
      }
    }
    
    // Fallback to HuggingFace if OpenRouter and Replicate failed
    if (!aiMessage && hfToken) {
      try {
        console.log('🔄 Trying HuggingFace API...');
        
        // Map model names to HuggingFace model IDs
        const hfModelMap = {
          'gpt-oss-20b': 'openai/gpt-oss-20b',
          'gpt-oss-120b': 'openai/gpt-oss-120b',
          'gemma-3-4b': 'google/gemma-3-4b-it',
          'gemma-3-12b': 'google/gemma-3-12b-it:featherless-ai',
          'gemma-3-27b': 'google/gemma-3-27b-it:featherless-ai'
        };
        
        const selectedHFModel = hfModelMap[model] || 'openai/gpt-oss-20b';
        console.log(`🎯 Using HuggingFace model: ${selectedHFModel} for request: ${model}`);
        
        const response = await fetch('https://router.huggingface.co/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${hfToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: selectedHFModel,
            messages: [
              {
                role: 'user',
                content: message
              }
            ],
            max_tokens: model === 'gpt-oss-120b' ? 2000 : 1000,
            temperature: 0.7,
            stream: false
          })
        });
        
        if (!response.ok) {
          const errorText = await response.text()
          if (response.status === 401) {
            throw new Error('Invalid HuggingFace token. Please check your token.')
          } else if (response.status === 429) {
            throw new Error('HuggingFace rate limit exceeded. Please try again later.')
          } else {
            throw new Error(`HuggingFace Error: ${response.status} - ${errorText}`)
          }
        }
        
        const data = await response.json()
        aiMessage = data.choices?.[0]?.message?.content || data.choices?.[0]?.text || ''
        
        if (!aiMessage) {
          console.log('🔍 HuggingFace response structure:', JSON.stringify(data, null, 2))
        }
        
        apiUsed = 'HuggingFace'
        console.log('✅ HuggingFace API successful')
        
      } catch (error) {
        console.log('❌ HuggingFace failed:', error.message)
        // Continue to LockLLM fallback
        console.log('🔄 Falling back to LockLLM API...');
      }
    }
    
    // Final fallback to LockLLM if all others failed
    if (!aiMessage && lockllmToken) {
      try {
        console.log('🔄 Trying LockLLM API...');
        
        // Map model names to LockLLM model IDs
        const lockllmModelMap = {
          'gpt-oss-20b': 'openai/gpt-oss-20b:free',
          'gpt-oss-120b': 'openai/gpt-oss-120b:free',
          'gemma-3-4b': 'google/gemma-3-4b-it:free',
          'gemma-3-12b': 'google/gemma-3-12b-it:free',
          'gemma-3-27b': 'google/gemma-3-27b-it:free'
        };
        
        const selectedLockllmModel = lockllmModelMap[model] || 'openai/gpt-oss-20b:free';
        console.log(`🎯 Using LockLLM model: ${selectedLockllmModel} for request: ${model}`);
        
        const response = await fetch('https://api.lockllm.com/v1/proxy/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${lockllmToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: selectedLockllmModel,
            messages: [
              {
                role: 'user',
                content: message
              }
            ],
            max_tokens: model === 'gpt-oss-120b' ? 2000 : 1000,
            temperature: 0.7,
            stream: false
          })
        });
        
        if (!response.ok) {
          const errorText = await response.text();
          if (response.status === 401) {
            throw new Error('Invalid LockLLM API token. Please check your token.')
          } else if (response.status === 429) {
            throw new Error('LockLLM rate limit exceeded. Please try again later.')
          } else {
            throw new Error(`LockLLM Error: ${response.status} - ${errorText}`)
          }
        }
        
        const data = await response.json();
        aiMessage = data.choices?.[0]?.message?.content || data.choices?.[0]?.text || '';
        
        if (!aiMessage) {
          console.log('🔍 LockLLM response structure:', JSON.stringify(data, null, 2));
        }
        
        apiUsed = 'LockLLM';
        console.log('✅ LockLLM API successful');
        
      } catch (error) {
        console.log('❌ LockLLM failed:', error.message);
        throw new Error('ALL_APIS_FAILED');
      }
    }
    
    if (!aiMessage) {
      throw new Error('ALL_APIS_FAILED');
    }
    
    // Clean up the response
    aiMessage = aiMessage
      .replace(/^["']|["']$/g, '')
      .replace(/\\n/g, '\n')
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      .trim();
    
    console.log(`✅ Real AI response received from ${apiUsed}:`, aiMessage);
    
    res.json({
      response: aiMessage,
      model: model,
      api: apiUsed,
      timestamp: new Date().toISOString(),
      success: true
    });
    
  } catch (error) {
    console.error('❌ Chat API error:', error);
    res.status(500).json({ error: 'Failed to process message: ' + error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

// CORS Proxy endpoints for Replicate and LockLLM
app.use(express.json({ limit: '10mb' }));

// Proxy endpoint for Replicate API
app.post('/api/replicate', async (req, res) => {
  try {
    const { token, version, input } = req.body;
    
    console.log('🔄 Proxying Replicate API request...');
    
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
    console.log('✅ Replicate proxy response received');
    res.json(data);
    
  } catch (error) {
    console.error('❌ Replicate proxy error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Proxy endpoint for LockLLM API
app.post('/api/lockllm', async (req, res) => {
  try {
    const { token, model, messages, max_tokens, temperature } = req.body;
    
    console.log('🔄 Proxying LockLLM API request...');
    
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
    console.log('✅ LockLLM proxy response received');
    res.json(data);
    
  } catch (error) {
    console.error('❌ LockLLM proxy error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Proxy status endpoint
app.get('/api/proxy-status', (req, res) => {
  res.json({ 
    status: 'running',
    timestamp: new Date().toISOString(),
    endpoints: ['/api/replicate', '/api/lockllm'],
    server: 'ULTIMATEUNBLOCKER All-in-One Server'
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log('🚀 ULTIMATEUNBLOCKER All-in-One Server Started!');
  console.log(`📍 Local: http://localhost:${PORT}`);
  console.log(`🔑 API endpoint: http://localhost:${PORT}/api/env`);
  console.log(`💬 Chat endpoint: http://localhost:${PORT}/api/chat`);
  console.log(`🛡️ CORS Proxy endpoints:`);
  console.log(`   - http://localhost:${PORT}/api/replicate`);
  console.log(`   - http://localhost:${PORT}/api/lockllm`);
  console.log(`📊 Status endpoints:`);
  console.log(`   - http://localhost:${PORT}/api/health`);
  console.log(`   - http://localhost:${PORT}/api/proxy-status`);
  console.log('✅ Ready for AI chat with secure API key loading!');
  console.log('🔄 API Fallback Chain: OpenRouter → Replicate → HuggingFace → LockLLM');
  console.log('🔒 CORS-safe proxy enabled - no external CORS issues!');
});
