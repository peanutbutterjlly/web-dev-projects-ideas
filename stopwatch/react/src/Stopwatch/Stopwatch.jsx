import { useEffect, useState } from 'react';
import { formatTime } from '../utils/formatTime';
import { clear, start, stop } from '../utils/stopwatchFunctions';
import './Stopwatch.css';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <>
      <h2>Stopwatch</h2>

      <p className="stopwatch">{formatTime(time)}</p>

      <div className="controls">
        <button
          disabled={isRunning}
          type="button"
          onClick={() =>
            start({ isRunning, setIsRunning, setTime, setIntervalId })
          }
        >
          Start Timer
        </button>
        <button
          disabled={!isRunning}
          type="button"
          onClick={() => stop({ setIsRunning, intervalId })}
        >
          Stop
        </button>
        <button
          type="button"
          onClick={() => clear({ setTime, setIsRunning, intervalId })}
        >
          Clear
        </button>
      </div>
    </>
  );
}
