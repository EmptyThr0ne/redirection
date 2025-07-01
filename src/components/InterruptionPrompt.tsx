import { useState} from 'react';

function InterruptionPrompt({ onContinue }: {() => void}) {
  const promps = [
    { text: 'Start or continue your novel', link: 'https://google.com' },
    { text: 'Watch a UX tutorial to learn the latest in design', link: 'https://youtube.com' },
    { text: 'Do a 5-min drawing exercise', link: ''}
  ];

  return (
    <div className="text-center max-w-md px-4 gap-8">
      <h2>🤐 You've been scrolling</h2>
      <p className="text-lg block text-center text-gray">Want to redirect?</p>
      <ul className="py-2">
        {promps.map(p => (
          <li className="p-1 text-center text-blue-100" key=p.text>
            <a href={p.link} className="text-blue" target=_blank>
              {p.text}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={onContinue} className="text-small border px-4">Skip</button>
    </div>
  );
}

export default InterruptionPrompt;