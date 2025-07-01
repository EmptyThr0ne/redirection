import React from 'react';

interface InterruptionPromptProps {
  onContinue: () => void;
}

function InterruptionPrompt({ onContinue }: InterruptionPromptProps) {
  const prompts = [
    { text: 'Write 1 paragraph for your novel', link: '' },
    { text: 'Watch a 5-minute drawing tutorial', link: '' },
    { text: 'Complete 1 flashcard on coding', link: '' },
  ];

  return (
    <div className="text-center max-w-md px-4 gap-8">
      <h2 className="text-xl font-bold mb-4">⛔ You've been scrolling</h2>
      <p className="text-gray-600 mb-4">Redirect your energy toward something meaningful:</p>
      <ul className="space-y-2 mb-4">
        {prompts.map((p, idx) => (
          <li key={idx} className="text-blue-600 underline">
            {p.link ? <a href={p.link}>{p.text}</a> : p.text}
          </li>
        ))}
      </ul>
      <button
        onClick={onContinue}
        className="text-sm border px-4 py-2 rounded hover:bg-gray-100"
      >
        Skip
      </button>
    </div>
  );
}

export default InterruptionPrompt;