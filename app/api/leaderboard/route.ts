import { NextResponse } from 'next/server';

// Dummy leaderboard data
const leaderboardData = [
  { id: '1', username: 'User1', points: 1000 },
  { id: '2', username: 'User2', points: 900 },
  { id: '3', username: 'User3', points: 800 },
];

// Named export for the GET request
export async function GET() {
  return NextResponse.json(leaderboardData);
}
