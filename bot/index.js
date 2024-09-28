// bot/index.js
import dotenv from 'dotenv';
dotenv.config(); 
import TelegramBot from 'node-telegram-bot-api'; // Use import
import fetch from 'node-fetch'; // Ensure to install node-fetch if you need to use fetch

// Load the bot token from the environment variables
const token = process.env.TELEGRAM_BOT_TOKEN;

// Create a new Telegram bot
const bot = new TelegramBot(token, { polling: true });

// Handle new chat members
bot.on('new_chat_members', async (msg) => {
  const user = msg.new_chat_member;

  // Construct user data
  const userData = {
    telegramId: user.id,
    username: user.username || 'unknown',
    createdAt: new Date().toISOString(), // Adjust as necessary
  };

  // Send user data to your Next.js API
  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

  if (response.ok) {
    const data = await response.json();
    console.log('User created:', data);
  } else {
    console.error('Error creating user:', response.statusText);
  }
});

// Start the bot
console.log('Bot is running...');
