"""
GEMMA-3-4B Vision Integration Example
=====================================

This demonstrates how to use GEMMA-3-4B with vision capabilities
through OpenRouter's API for multimodal tasks.

Requirements:
pip install openai

Environment Variables:
export OPENROUTER_API_KEY="your_openrouter_api_key_here"
"""

import os
from openai import OpenAI

# Initialize the OpenAI client with OpenRouter
client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.environ.get("OPENROUTER_API_KEY"),
)

def test_gemma_vision_basic():
    """Test GEMMA-3-4B with basic image analysis"""
    
    print("👁️ Testing GEMMA-3-4B Vision...")
    
    completion = client.chat.completions.create(
        model="google/gemma-3-4b-it:free",
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "What is in this image?"
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": "https://live.staticflickr.com/3851/14825276609_098cac593d_b.jpg"
                        }
                    }
                ]
            }
        ],
        max_tokens=1024,
        temperature=0.7
    )
    
    response = completion.choices[0].message.content
    print(f"📝 Vision Analysis: {response}")
    
    return response

def test_gemma_vision_streaming():
    """Test GEMMA-3-4B with streaming vision analysis"""
    
    print("🌊 Testing GEMMA-3-4B Vision Streaming...")
    
    stream = client.chat.completions.create(
        model="google/gemma-3-4b-it:free",
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": "Describe this image in detail, including colors, objects, and composition."
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": "https://live.staticflickr.com/3851/14825276609_098cac593d_b.jpg"
                        }
                    }
                ]
            }
        ],
        max_tokens=1500,
        temperature: 0.7,
        stream=True
    )
    
    print("📡 Streaming vision analysis:")
    full_response = ""
    for chunk in stream:
        content = chunk.choices[0].delta.content
        if content:
            print(content, end='', flush=True)
            full_response += content
    
    print(f"\n✅ Complete vision analysis received ({len(full_response)} characters)")
    return full_response

def test_gemma_vision_multiple_images():
    """Test GEMMA-3-4B with multiple images"""
    
    print("🖼️ Testing GEMMA-3-4B with Multiple Images...")
    
    # Sample image URLs (you can replace with your own)
    images = [
        "https://live.staticflickr.com/3851/14825276609_098cac593d_b.jpg",
        "https://picsum.photos/400/300",
        "https://picsum.photos/500/400"
    ]
    
    for i, image_url in enumerate(images, 1):
        print(f"\n🔍 Analyzing image {i}: {image_url}")
        
        try:
            completion = client.chat.completions.create(
                model="google/gemma-3-4b-it:free",
                messages=[
                    {
                        "role": "user",
                        "content": [
                            {
                                "type": "text",
                                "text": f"What do you see in image {i}? Provide a brief description."
                            },
                            {
                                "type": "image_url",
                                "image_url": {
                                    "url": image_url
                                }
                            }
                        ]
                    }
                ],
                max_tokens=500,
                temperature: 0.7
            )
            
            response = completion.choices[0].message.content
            print(f"📝 Image {i} Analysis: {response[:100]}...")
            
        except Exception as e:
            print(f"❌ Error with image {i}: {str(e)}")

def test_gemma_vision_reasoning():
    """Test GEMMA-3-4B with visual reasoning tasks"""
    
    print("🧠 Testing GEMMA-3-4B Visual Reasoning...")
    
    reasoning_prompts = [
        "Count how many objects are in this image.",
        "What might happen next in this scene?",
        "Describe the mood or atmosphere of this image.",
        "What technical aspects (lighting, composition) do you notice?",
        "How would you categorize this image?"
    ]
    
    image_url = "https://live.staticflickr.com/3851/14825276609_098cac593d_b.jpg"
    
    for i, prompt in enumerate(reasoning_prompts, 1):
        print(f"\n🤔 Reasoning Task {i}: {prompt}")
        
        try:
            completion = client.chat.completions.create(
                model="google/gemma-3-4b-it:free",
                messages=[
                    {
                        "role": "user",
                        "content": [
                            {
                                "type": "text",
                                "text": prompt
                            },
                            {
                                "type": "image_url",
                                "image_url": {
                                    "url": image_url
                                }
                            }
                        ]
                    }
                ],
                max_tokens=800,
                temperature: 0.5
            )
            
            response = completion.choices[0].message.content
            print(f"💭 Reasoning {i}: {response}")
            
        except Exception as e:
            print(f"❌ Error with reasoning task {i}: {str(e)}")

def test_gemma_text_only():
    """Test GEMMA-3-4B with text-only tasks"""
    
    print("📝 Testing GEMMA-3-4B Text-Only...")
    
    text_prompts = [
        "Explain the concept of artificial intelligence.",
        "Write a short story about a robot discovering emotions.",
        "What are the benefits of renewable energy?",
        "How does photosynthesis work?",
        "Describe the perfect day in your own words."
    ]
    
    for i, prompt in enumerate(text_prompts, 1):
        print(f"\n📄 Text Task {i}: {prompt}")
        
        try:
            completion = client.chat.completions.create(
                model="google/gemma-3-4b-it:free",
                messages=[
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                max_tokens: 600,
                temperature: 0.7
            )
            
            response = completion.choices[0].message.content
            print(f"📖 Response {i}: {response[:150]}...")
            
        except Exception as e:
            print(f"❌ Error with text task {i}: {str(e)}")

if __name__ == "__main__":
    # Check if OPENROUTER_API_KEY is set
    if not os.environ.get("OPENROUTER_API_KEY"):
        print("❌ Please set OPENROUTER_API_KEY environment variable:")
        print("export OPENROUTER_API_KEY='your_openrouter_api_key_here'")
        exit(1)
    
    print("🚀 GEMMA-3-4B Vision Test Suite")
    print("=" * 50)
    
    # Run tests
    try:
        # Test basic vision
        test_gemma_vision_basic()
        
        print("\n" + "=" * 50)
        
        # Test streaming vision
        test_gemma_vision_streaming()
        
        print("\n" + "=" * 50)
        
        # Test multiple images
        test_gemma_vision_multiple_images()
        
        print("\n" + "=" * 50)
        
        # Test visual reasoning
        test_gemma_vision_reasoning()
        
        print("\n" + "=" * 50)
        
        # Test text-only
        test_gemma_text_only()
        
        print("\n✅ All tests completed successfully!")
        
    except Exception as e:
        print(f"❌ Test failed: {str(e)}")
        exit(1)
