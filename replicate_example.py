"""
Replicate GPT-OSS-120B Integration Example
==========================================

This demonstrates how to use Replicate's API to access GPT-OSS-120B
with streaming support for advanced reasoning capabilities.

Requirements:
pip install replicate

Environment Variables:
export REPLICATE_API_TOKEN="your_replicate_token_here"
"""

import os
from replicate import Replicate

def test_gpt_oss_120b_streaming():
    """Test GPT-OSS-120B with streaming support"""
    
    print("🧠 Testing GPT-OSS-120B with Replicate streaming...")
    
    # Initialize Replicate client
    replicate = Replicate(
        auth=os.environ.get("REPLICATE_API_TOKEN")
    )
    
    # Input for GPT-OSS-120B
    input_data = {
        prompt: "What does the company Replicate do? Explain in detail.",
        max_tokens: 2000,
        temperature: 0.7
    }
    
    print("📡 Streaming response:")
    print("-" * 50)
    
    # Stream the response
    full_response = ""
    for event in replicate.stream("openai/gpt-oss-120b", {input: input_data}):
        chunk = str(event)
        full_response += chunk
        print(chunk, end='', flush=True)
    
    print("\n" + "-" * 50)
    print(f"✅ Complete response received ({len(full_response)} characters)")
    
    return full_response

def test_gpt_oss_120b_sync():
    """Test GPT-OSS-120B with synchronous call"""
    
    print("🧠 Testing GPT-OSS-120B with synchronous call...")
    
    replicate = Replicate(
        auth=os.environ.get("REPLICATE_API_TOKEN")
    )
    
    input_data = {
        prompt: "How many r's are in the word 'strawberry'? Think step by step.",
        max_tokens: 2000,
        temperature: 0.3
    }
    
    try:
        output = replicate.run("openai/gpt-oss-120b", {input: input_data})
        
        if isinstance(output, list):
            response = "".join(output)
        else:
            response = str(output)
        
        print(f"📝 Response: {response}")
        print(f"✅ Sync response received ({len(response)} characters)")
        
        return response
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        return None

def test_multiple_models():
    """Test different models available through Replicate"""
    
    models = [
        ("openai/gpt-oss-20b", "GPT-OSS-20B"),
        ("openai/gpt-oss-120b", "GPT-OSS-120B"),
        ("google/gemma-2-9b-it", "GEMMA-2-9B")
    ]
    
    replicate = Replicate(
        auth=os.environ.get("REPLICATE_API_TOKEN")
    )
    
    for model_id, model_name in models:
        print(f"\n🤖 Testing model: {model_name} ({model_id})")
        
        try:
            input_data = {
                prompt: "What is the capital of France? Give a brief explanation.",
                max_tokens: 500,
                temperature: 0.7
            }
            
            output = replicate.run(model_id, {input: input_data})
            
            if isinstance(output, list):
                response = "".join(output)
            else:
                response = str(output)
            
            print(f"✅ {model_name}: {response[:100]}...")
            
        except Exception as e:
            print(f"❌ Error with {model_name}: {str(e)}")

def advanced_reasoning_test():
    """Test advanced reasoning capabilities"""
    
    print("🧠 Advanced Reasoning Test with GPT-OSS-120B")
    print("=" * 60)
    
    replicate = Replicate(
        auth=os.environ.get("REPLICATE_API_TOKEN")
    )
    
    reasoning_prompts = [
        "A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?",
        "If you have 3 apples and you take away 2, how many do you have?",
        "What comes next in this sequence: 1, 4, 9, 16, 25, ?",
        "Explain the concept of artificial intelligence to a 10-year-old."
    ]
    
    for i, prompt in enumerate(reasoning_prompts, 1):
        print(f"\n🔍 Question {i}: {prompt}")
        print("💭 Thinking...")
        
        try:
            input_data = {
                prompt: prompt,
                max_tokens: 1000,
                temperature: 0.3
            }
            
            # Use streaming for better experience
            full_response = ""
            for event in replicate.stream("openai/gpt-oss-120b", {input: input_data}):
                chunk = str(event)
                full_response += chunk
                print(chunk, end='', flush=True)
            
            print(f"\n✅ Answer {i} complete")
            
        except Exception as e:
            print(f"❌ Error: {str(e)}")

if __name__ == "__main__":
    # Check if REPLICATE_API_TOKEN is set
    if not os.environ.get("REPLICATE_API_TOKEN"):
        print("❌ Please set REPLICATE_API_TOKEN environment variable:")
        print("export REPLICATE_API_TOKEN='your_replicate_token_here'")
        exit(1)
    
    print("🚀 Replicate GPT-OSS-120B Test Suite")
    print("=" * 50)
    
    # Run tests
    try:
        # Test streaming
        test_gpt_oss_120b_streaming()
        
        print("\n" + "=" * 50)
        
        # Test synchronous
        test_gpt_oss_120b_sync()
        
        print("\n" + "=" * 50)
        
        # Test multiple models
        test_multiple_models()
        
        print("\n" + "=" * 50)
        
        # Test advanced reasoning
        advanced_reasoning_test()
        
        print("\n✅ All tests completed successfully!")
        
    except Exception as e:
        print(f"❌ Test failed: {str(e)}")
        exit(1)
