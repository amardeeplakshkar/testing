import { NextResponse } from 'next/server';

// Example task data
const tasks = [
  { _id: '1', label: 'Task 1', amount: 10 },
  { _id: '2', label: 'Task 2', amount: 20 },
  { _id: '3', label: 'Task 3', amount: 30 },
];

export async function GET() {
  try {
    // Return the tasks as a JSON response
    return NextResponse.json(tasks);
  } catch (error) {
    console.error('Error in /api/tasks:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
