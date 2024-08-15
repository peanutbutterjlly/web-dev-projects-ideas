import { useState } from 'react';
import { formatTime } from '../utils/formatTime';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  return (
    <>
      <p className="stopwatch">{formatTime(time)}</p>
    </>
  );
}

export default App;
