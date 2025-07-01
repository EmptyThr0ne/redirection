import React, { useState } from 'react';

interface DashboardProps {
  onRetry: () => void;
}

function Dashboard({ onRetry }: DashboardProps) {
  const [redirectCount, setRedirectCount] = useState(3);
  const [timeSaved, setTimeSaved] = useState(60); // minutes

  return (
    <div className="text-center py-8 min-h-[40vh]">
      <h1 className="text-2xl font-bold mb-4">Your Re:direction Summary</h1>
      <p className="mb-2">Redirections this week: {redirectCount}</p>
      <p className="mb-6">Time saved: {timeSaved} minutes</p>
      <button
        onClick={onRetry}
        className="text-sm border mt-2 px-4 py-2 rounded hover:bg-gray-100"
      >
        Restart
      </button>
    </div>
  );
}

export default Dashboard;