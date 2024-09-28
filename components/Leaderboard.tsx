"use client"
import React, { useEffect, useState } from 'react';

interface User {
  id: string;
  username: string;
  points: number;
}

const Leaderboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/leaderboard')
      .then((res) => {
        console.log('API Response Status:', res.status); // Log status code
        if (!res.ok) {
          throw new Error('Failed to fetch leaderboard');
        }
        return res.json();
      })
      .then((data: User[]) => {
        console.log('API Data:', data); // Log API response data
        setUsers(data);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching leaderboard:', error);
        setError('Could not load leaderboard data');
      });
  }, []);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="leaderboard-container">
      <h2 className="text-2xl font-bold">Leaderboard</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.points} $COCKS
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
