"""
HuggingFace OpenAI Client Integration Example
===========================================

This demonstrates how to use HuggingFace's router with the OpenAI Python client
to access models like GPT-OSS-120B with reasoning capabilities.

Requirements:
pip install openai

Environment Variables:
export HF_TOKEN="your_huggingface_token_here"
"""

import os
from openai import OpenAI

# Initialize the OpenAI client with HuggingFace router
client = OpenAI(
    base_url="https://router.huggingface.co/v1",
    api_key=os.environ["HF_TOKEN"],
)

def test_gpt_oss_120b():
    """Test GPT-OSS-120B model with reasoning capabilities"""
    
    print("🧠 Testing GPT-OSS-120B with HuggingFace...")
    
    completion = client.chat.completions.create(
        model="openai/gpt-oss-120b:groq",
        messages=[
            {
                "role": "system",
                "content": "You are a helpful AI assistant with advanced reasoning capabilities."
            },
            {
                "role": "user",
                "content": "How many r's are in the word 'strawberry'? Think step by step."
            }
        ],
        max_tokens=2000,
        temperature=0.7,
        stream=False
    )
    
    response = completion.choices[0].message
    print(f"📝 Response: {response.content}")
    
    # Check for reasoning tokens (if available)
    if hasattr(response, 'reasoning_tokens'):
        print(f"🧠 Reasoning tokens: {response.reasoning_tokens}")
    
    return response.content

def test_multiple_models():
    """Test different models available through HuggingFace"""
    
    models = [
        "openai/gpt-oss-20b:groq",
        "openai/gpt-oss-120b:groq", 
        "google/gemma-2-9b-it"
    ]
    
    for model in models:
        print(f"\n🤖 Testing model: {model}")
        
        try:
            completion = client.chat.completions.create(
                model=model,
                messages=[
                    {
                        "role": "user", 
                        "content": "What is the capital of France? Give a brief explanation."
                    }
                ],
                max_tokens=500,
                temperature=0.7
            )
            
            response = completion.choices[0].message.content
            print(f"✅ {model}: {response[:100]}...")
            
        except Exception as e:
            print(f"❌ Error with {model}: {str(e)}")

def streaming_example():
    """Example of streaming responses"""
    
    print("🌊 Streaming example with GPT-OSS-120B...")
    
    stream = client.chat.completions.create(
        model="openai/gpt-oss-120b:groq",
        messages=[
            {
                "role": "user",
                "content": "Explain quantum computing in simple terms."
            }
        ],
        max_tokens=1000,
        temperature=0.7,
        stream=True
    )
    
    print("📡 Streaming response:")
    for chunk in stream:
        content = chunk.choices[0].delta.content
        if content:
            print(content, end='', flush=True)
    
    print("\n✅ Streaming complete!")

if __name__ == "__main__":
    # Check if HF_TOKEN is set
    if not os.environ.get("HF_TOKEN"):
        print("❌ Please set HF_TOKEN environment variable:")
        print("export HF_TOKEN='your_huggingface_token_here'")
        exit(1)
    
    print("🚀 HuggingFace OpenAI Client Test Suite")
    print("=" * 50)
    
    # Run tests
    try:
        # Test GPT-OSS-120B
        test_gpt_oss_120b()
        
        # Test multiple models
        test_multiple_models()
        
        # Test streaming
        streaming_example()
        
        print("\n✅ All tests completed successfully!")
        
    except Exception as e:
        print(f"❌ Test failed: {str(e)}")
        exit(1)
