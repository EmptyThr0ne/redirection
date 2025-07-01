import React, {useState} from 'react';

function OnboardingScreen() {
  const [newGoal, setNewGoal] = useState("");

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to Re:direction</h1>
      <p className="text-sm text-gray-600 mb-4">What’s a dream you want to work on?</p>
      <input
        type="text"
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
        placeholder="E.g. Learn to draw, build an app"
        className="rounded border p-2 text-center mb-4"
      />
      <button
        onClick={() => {
          if (newGoal.trim()) {
            alert("Saved: " + newGoal);
          }
        }}
        className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded"
      >
        Start Tracking
      </button>
    </div>
  );
}

export default OnboardingScreen;