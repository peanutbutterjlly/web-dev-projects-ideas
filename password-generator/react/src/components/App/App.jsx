import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import './App.css';
import viteLogo from '/vite.svg';

const PASSWORD_LENGTH = 8;
const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_LETTERS = LETTERS.toUpperCase();
const NUMBERS = '0123456789';
const SPECIAL_CHARS = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

function App() {
  const [password, setPassword] = useState('');
  const [pwLength, setPwLength] = useState(PASSWORD_LENGTH);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);

  /**
   * Generates a random password based on the specified character pool and length.
   *
   * @return {string} The generated password
   */
  function generatePassword() {
    let characterPool = LETTERS;
    if (includeUpper) characterPool += UPPERCASE_LETTERS;
    if (includeNumber) characterPool += NUMBERS;
    if (includeSpecial) characterPool += SPECIAL_CHARS;

    let newPassword = '';
    for (let i = 0; i < pwLength; i++) {
      newPassword +=
        characterPool[Math.floor(Math.random() * characterPool.length)];
    }
    setPassword(newPassword);
  }

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
        <p>Password: {password}</p>
        <button onClick={generatePassword}>Create Password</button>
        <div>
          <input
            type="range"
            id="password-length"
            max={32}
            value={pwLength}
            onChange={(e) => setPwLength(e.target.value)}
          />
          <label htmlFor="password-length">Password Length</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="num-checkbox"
            checked={includeNumber}
            onChange={() => setIncludeNumber(!includeNumber)}
          />
          <label htmlFor="num-checkbox">Include Numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="upper-checkbox"
            checked={includeUpper}
            onChange={() => setIncludeUpper(!includeUpper)}
          />
          <label htmlFor="upper-checkbox">Include Uppercase Letters</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="special-checkbox"
            checked={includeSpecial}
            onChange={() => setIncludeSpecial(!includeSpecial)}
          />
          <label htmlFor="special-checkbox">Include Special Letters</label>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
