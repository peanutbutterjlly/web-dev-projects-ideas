import { setTimeout } from 'node:timers';
import { useEffect, useState } from 'react';
import { formatTime } from '~/utils/formatTime';
import { clear, start, stop } from '~/utils/stopwatchFunctions';
import Button from './Button';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<
    ReturnType<typeof setTimeout> | undefined
  >(undefined);

  // clear the interval when the component unmounts
  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <>
      <p className="text-3xl my-4 text-center">{formatTime(time)}</p>
      <div className="flex gap-4">
        <Button
          disabled={isRunning}
          type="button"
          onClick={() =>
            start({ isRunning, setIsRunning, setTime, setIntervalId })
          }
        >
          Start Timer
        </Button>
        <Button
          disabled={!isRunning}
          type="button"
          onClick={() => stop({ setIsRunning, intervalId })}
        >
          Stop
        </Button>
        <Button
          type="button"
          onClick={() => clear({ setTime, setIsRunning, intervalId })}
        >
          Clear
        </Button>
      </div>
    </>
  );
}
