import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const update = await req.json();

  // Check if the update contains a message
  if (update.message) {
    const { id: telegramId, username, first_name, last_name } = update.message.from;

    // Create user or update points
    const userData = {
      telegramId,
      username: username || '',
      firstName: first_name || '',
      lastName: last_name || '',
      createdAt: new Date().toISOString(),
    };

    // Send a request to create the user
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    // Respond to Telegram (optional, e.g., send a welcome message)
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramId,
        text: `Welcome ${first_name}! You have been registered.`,
      }),
    });
  }

  return NextResponse.json({ success: true });
}
