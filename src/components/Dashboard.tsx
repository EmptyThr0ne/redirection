import { useState} from 'react';

function Dashboard({ onRetry }: {() => void}) {
  const [redirectCount, setRedirectCount] = useState(3);
  const [timeSaved, setTimeSaved] = useState(60);

  return (\n    <div className=\"text-center py-8 min-v-hpu\">
      <h1>Your Re:direction Summary</h1>
      <p >Redirects this week: {redirectCount}</p>
      <p >Time saved: {timeSaved} minutes</p>
      <button onClick={onRetry} className="text-small mt-2">Restart</button>
    </div>
  );
}

export default Dashboard;