/**
 * Starts the stopwatch if it is not already running, updating the running state and setting the interval ID.
 *
 * @param {Object} props - The properties required to start the stopwatch.
 * @param {boolean} props.isRunning - The current running state of the stopwatch.
 * @param {function} props.setIsRunning - The function to update the running state of the stopwatch.
 * @param {function} props.setTime - The function to update the time of the stopwatch.
 * @param {function} props.setIntervalId - The function to set the interval ID of the stopwatch.
 * @return {void} This function does not return any value.
 */
export function start({ isRunning, setIsRunning, setTime, setIntervalId }) {
  if (!isRunning) {
    setIsRunning(true);

    const intID = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);

    setIntervalId(intID);
  }
}

/**
 * Stops the stopwatch by setting its running state to false and clearing the interval.
 *
 * @param {Object} props - An object containing the properties required to stop the stopwatch.
 * @param {function} props.setIsRunning - A function to update the running state of the stopwatch.
 * @param {number} props.intervalId - The interval ID of the stopwatch.
 * @return {void} This function does not return any value.
 */
export function stop({ setIsRunning, intervalId }) {
  setIsRunning(false);
  clearInterval(intervalId);
}

/**
 * Resets the stopwatch to its initial state by stopping the timer and setting the time to 0.
 *
 * @param {Object} props - An object containing the properties required to clear the stopwatch.
 * @param {function} props.setTime - A function to update the time.
 * @param {function} props.setIsRunning - A function to update the running state.
 * @param {number} props.intervalId - The interval ID.
 * @return {void} This function does not return any value.
 */
export function clear({ setTime, setIsRunning, intervalId }) {
  stop({ setIsRunning, intervalId });
  setTime(0);
}
