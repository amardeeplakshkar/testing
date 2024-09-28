import React from 'react';

interface Task {
  label: string;
  amount: number;
}

interface TaskCardProps {
  task: Task; // Define props to include the task object
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{task.label}</h3>
      <p>Reward: {task.amount} $COCKS</p>
    </div>
  );
};

export default TaskCard;
