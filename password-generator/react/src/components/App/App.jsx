import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import PasswordForm from '../PasswordForm/PasswordForm';
import './App.css';
import viteLogo from '/vite.svg';

const MIN_PASSWORD_LENGTH = 8;
const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_LETTERS = LETTERS.toUpperCase();
const NUMBERS = '0123456789';
const SPECIAL_CHARS = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

function App() {
  const [password, setPassword] = useState('');
  const [pwLength, setPwLength] = useState(MIN_PASSWORD_LENGTH);
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
        <p>Password:</p>
        <p style={{ minHeight: '24px', wordBreak: 'break-all' }}>{password}</p>
        <PasswordForm
          handleSetPassword={setPassword}
          MIN_PASSWORD_LENGTH={MIN_PASSWORD_LENGTH}
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
