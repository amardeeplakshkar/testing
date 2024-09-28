"use client";
import React, { useEffect, useState } from "react";
import TaskCard from "@/components/TaskCard";

interface Task {
  _id: string;
  label: string;
  amount: number;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Fetch tasks
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((data: Task[]) => setTasks(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Welcome to $COCKS Airdrop!</h1>
      <h2 className="text-xl mt-4">Available Tasks:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Home;
