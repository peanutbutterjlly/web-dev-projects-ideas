import { useState } from 'react';

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE_LETTERS = LETTERS.toUpperCase();
const NUMBERS = '0123456789';
const SPECIAL_CHARS = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

export default function PasswordForm({
  handleSetPassword,
  MIN_PASSWORD_LENGTH,
}) {
  const [pwLength, setPwLength] = useState(MIN_PASSWORD_LENGTH);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);

  /**
   * Generates a random password based on the specified character pool and length.
   *
   * @return {string} The generated password
   */
  function generatePassword(setCallBack) {
    let characterPool = LETTERS;
    if (includeUpper) characterPool += UPPERCASE_LETTERS;
    if (includeNumber) characterPool += NUMBERS;
    if (includeSpecial) characterPool += SPECIAL_CHARS;

    let newPassword = '';
    for (let i = 0; i < pwLength; i++) {
      newPassword +=
        characterPool[Math.floor(Math.random() * characterPool.length)];
    }
    setCallBack(newPassword);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <input
          type="range"
          id="password-length"
          min={MIN_PASSWORD_LENGTH}
          max={32}
          value={pwLength}
          onChange={(e) => setPwLength(e.target.value)}
        />
        <label htmlFor="password-length">Password Length ({pwLength})</label>
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
      <button type="button" onClick={() => generatePassword(handleSetPassword)}>
        Create Password
      </button>
    </form>
  );
}
