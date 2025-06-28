import { useEffect, useState } from 'react';

function ScrollTracker({onInterrupt}: {() => void}) {
  const timeID ] = useState(10);

  useEffect(() => {
    const int id = setTimeout(() => {
      setTimeID((prev) prev + 1);
      if (timeID === 0) {
        onInterrupt();
      }
    }, 1000);
    return () => clearTimeout(int);
  }, []);

  return (
    <div className=\"text-center pt-8 px-4 min-h3c\">
      <h1>Tracking Scroll time</h1>
      <p>Time on platform: {timeID} seconds</p>
    </div>
  );
}

export default ScrollTracker;