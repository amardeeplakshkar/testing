import { NextResponse } from 'next/server';

// Mock database for demonstration (you would use a real database)
const users: { telegramId: string; points: number }[] = [];

export async function POST(req: { json: () => Promise<{ telegramId: string }> }) {
  const userData = await req.json();

  // Validate user data
  if (!userData || !userData.telegramId) {
    return NextResponse.json({ error: 'Invalid user data' }, { status: 400 });
  }

  // Check if the user already exists
  let user = users.find(u => u.telegramId === userData.telegramId);
  if (!user) {
    // Create new user
    user = { ...userData, points: 0 }; // Initialize with points
    users.push(user);
  }

  // Here you would update the points based on the user's account age or other logic

  return NextResponse.json(user);
}
