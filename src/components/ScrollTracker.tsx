import React, { useEffect, useState } from 'react';

interface ScrollTrackerProps {
  onInterrupt: () => void;
}

function ScrollTracker({ onInterrupt }: ScrollTrackerProps) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        const next = prev + 1;
        if (next >= 10) onInterrupt(); // trigger after 10 seconds
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onInterrupt]);

  return (
    <div className="text-center pt-8 px-4 min-h-[30vh]">
      <h1 className="text-xl font-semibold mb-4">Tracking Scroll Time...</h1>
      <p>Time spent: {time} seconds</p>
    </div>
  );
}

export default ScrollTracker;