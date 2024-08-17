import { useEffect, useState } from 'react';
import { formatTime } from '../utils/formatTime';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  /**
   * Starts the timer if it is not already running.
   *
   * @return {void} This function does not return anything.
   */
  function start() {
    if (!isRunning) {
      setIsRunning(true);

      const intID = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);

      setIntervalId(intID);
    }
  }

  /**
   * Stops the timer if it is currently running.
   *
   * @return {void} This function does not return any value.
   */
  function stop() {
    setIsRunning(false);
    clearInterval(intervalId);
  }

  /**
   * Resets the stopwatch to its initial state.
   *
   * @return {void} This function does not return any value.
   */
  function clear() {
    stop();
    setTime(0);
  }

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <>
      <p className="stopwatch">{formatTime(time)}</p>
      <button disabled={isRunning} type="button" onClick={start}>
        Start Timer
      </button>
      <button disabled={!isRunning} type="button" onClick={stop}>
        Stop
      </button>
      <button type="button" onClick={clear}>
        Clear
      </button>
    </>
  );
}
