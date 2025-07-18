#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up environment variables for your SaaS Learning Platform...\n');

// Check if .env.local already exists
const envPath = path.join(process.cwd(), '.env.local');
const envExists = fs.existsSync(envPath);

if (envExists) {
  console.log('⚠️  .env.local already exists!');
  console.log('Please manually add your OpenAI API key to the existing file.\n');
} else {
  // Create .env.local template
  const envTemplate = `# OpenAI API Configuration
# Get your API key from: https://platform.openai.com/api-keys
OPENAI_API_KEY=your_openai_api_key_here

# NextAuth Configuration (Optional - for authentication)
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your_nextauth_secret_here

# Optional: Authentication Providers
# GOOGLE_CLIENT_ID=your_google_client_id
# GOOGLE_CLIENT_SECRET=your_google_client_secret
# GITHUB_CLIENT_ID=your_github_client_id
# GITHUB_CLIENT_SECRET=your_github_client_secret

# Database Configuration (Optional - for production)
# MONGODB_URI=your_mongodb_connection_string
# SUPABASE_URL=your_supabase_url
# SUPABASE_ANON_KEY=your_supabase_anon_key
`;

  try {
    fs.writeFileSync(envPath, envTemplate);
    console.log('✅ Created .env.local file successfully!');
    console.log('📝 Please edit .env.local and add your OpenAI API key.');
    console.log('🔑 Get your API key from: https://platform.openai.com/api-keys\n');
  } catch (error) {
    console.error('❌ Failed to create .env.local file:', error.message);
  }
}

console.log('📋 Next steps:');
console.log('1. Get your OpenAI API key from https://platform.openai.com/api-keys');
console.log('2. Edit .env.local and replace "your_openai_api_key_here" with your actual key');
console.log('3. Restart your development server: npm run dev');
console.log('4. Test AI features in your app!\n');

console.log('🎉 Your SaaS Learning Platform will be ready with AI capabilities!'); 