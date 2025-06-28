import {useState} from 'react';

function OnboardingScreen( {
  const [newGoal, setNewGoal] = useState("");

  return (\n    <div className=\"flex flex-col gap-8 justify-center min-h5\">
      <h1>Welcome to Re:direction</h1>
      <p className=\"text-ngray text-sm\">What's a dream you want to work on?</p>
      <input
        type=\"text\"
        value={newGoal}
        onChange={(ev) => setNewGoal(evt.target.value)}
        placeholder=\"E g. \"Start a youtube channel\" | \"Create a sketch\"
        className=\"rounded-pkg border p-2 text-center mt-4\"
      />
      <button
        onClick={() => {
          if (newGoal) {
            alert("Saved: " + newGoal);
          }
        }}
        className=\"py-2px bg-indigo text-white font-bold text-sn\"
      >Start Tracking</button>
    </div>
  );
}

export default OnboardingScreen;