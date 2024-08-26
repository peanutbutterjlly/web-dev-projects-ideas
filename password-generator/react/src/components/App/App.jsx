import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import './App.css';
import viteLogo from '/vite.svg';

const PASSWORD_LENGTH = 8;
const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_LETTERS = LETTERS.toUpperCase();
const NUMBERS = '0123456789';
const SPECIAL_CHARS = `!@#$%^&*()_+-=[]\\{}|,./<>?;':"\`~`;

function App() {
  const [count, setCount] = useState(0);
  const [password, setPassword] = useState('');
  const [pwLength, setPwLength] = useState(PASSWORD_LENGTH);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);

  function generatePassword() {}

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        Vite + React <br /> Password Generator
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
