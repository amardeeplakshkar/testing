import React from 'react';

const TaskCard: React.FC<{ task: any }> = ({ task }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{task.label}</h3>
      <p>Reward: {task.amount} $COCKS</p>
    </div>
  );
};

export default TaskCard;
