import { clearProps, startProps, stopProps } from '~/types/stopwatch';

/**
 * Starts the stopwatch if it is not already running, updating the running state and setting the interval ID.
 *
 * @param {startProps} props - The properties required to start the stopwatch, including the current running state, and functions to update the running state, time, and interval ID.
 * @return {void} This function does not return any value.
 */
export function start({
  isRunning,
  setIsRunning,
  setTime,
  setIntervalId,
}: startProps) {
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
 * @param {stopProps} props - An object containing the properties required to stop the stopwatch, including the function to update the running state and the interval ID.
 * @return {void} This function does not return any value.
 */
export function stop({ setIsRunning, intervalId }: stopProps) {
  setIsRunning(false);
  clearInterval(intervalId);
}

/**
 * Resets the stopwatch to its initial state by stopping the timer and setting the time to 0.
 *
 * @param {clearProps} props - An object containing the properties required to clear the stopwatch, including the function to update the time, the function to update the running state, and the interval ID.
 * @return {void} This function does not return any value.
 */
export function clear({ setTime, setIsRunning, intervalId }: clearProps) {
  stop({ setIsRunning, intervalId });
  setTime(0);
}
