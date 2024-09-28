import { NextResponse } from 'next/server';

// Mock database for demonstration purposes (replace this with actual database logic)
const users: { telegramId: string; points: number }[] = [];

export async function POST(req: Request) {
  try {
    // Extract and parse the JSON request body
    const { telegramId } = await req.json();

    // Validate that the telegramId is present
    if (!telegramId) {
      return NextResponse.json({ error: 'Telegram ID is required' }, { status: 400 });
    }

    // Check if the user already exists in the mock database
    let user = users.find((u) => u.telegramId === telegramId);

    if (!user) {
      // If the user is not found, calculate points based on Telegram account's age
      const accountAgePoints = calculatePointsBasedOnAccountAge(telegramId);

      // Create a new user with calculated points
      user = { telegramId, points: accountAgePoints };

      // Add the new user to the "database" (users array)
      users.push(user);
    }

    // Return the user data as a JSON response
    return NextResponse.json(user);
  } catch (error) {
    console.error('Error handling user creation:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Example function to calculate points based on Telegram account age (replace with actual logic)
function calculatePointsBasedOnAccountAge(telegramId: string): number {
  // Example: Simple logic based on telegramId length (for demonstration)
  const basePoints = 100;
  const additionalPoints = telegramId.length; // Add points based on ID length (just an example)
  return basePoints + additionalPoints;
}
