#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' });

async function testDeepSeek() {
  console.log('🧪 Testing DeepSeek API configuration...\n');

  // Check if API key is set
  const apiKey = process.env.DEEPSEEK_API_KEY;
  
  if (!apiKey || apiKey === 'your_deepseek_api_key_here') {
    console.log('❌ DeepSeek API key not configured!');
    console.log('📝 Please edit .env.local and add your DeepSeek API key.');
    console.log('🔑 Get your API key from: https://platform.deepseek.com/\n');
    return;
  }

  console.log('✅ API key format looks correct');
  console.log('🔄 Testing API connection...\n');

  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful programming tutor. Respond with a simple greeting.'
          },
          {
            role: 'user',
            content: 'Hello! Can you help me learn programming?'
          }
        ],
        max_tokens: 50,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`DeepSeek API error: ${response.status} - ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ DeepSeek API connection successful!');
    console.log('🤖 Response:', data.choices[0]?.message?.content);
    console.log('\n🎉 Your SaaS Learning Platform is ready for AI features!');
    
  } catch (error) {
    console.log('❌ DeepSeek API test failed:');
    console.log('Error:', error.message);
    
    if (error.message.includes('401')) {
      console.log('\n💡 This usually means your API key is invalid.');
      console.log('🔑 Please check your API key in .env.local');
    } else if (error.message.includes('429')) {
      console.log('\n💡 This usually means you\'ve hit the rate limit.');
      console.log('💰 Check your DeepSeek account for usage limits.');
    } else if (error.message.includes('ENOTFOUND')) {
      console.log('\n💡 This usually means a network connection issue.');
      console.log('🌐 Please check your internet connection.');
    }
  }
}

testDeepSeek(); 