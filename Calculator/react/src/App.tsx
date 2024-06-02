import { evaluate } from 'mathjs';
import { useEffect, useState } from 'react';
import './App.css';
import ButtonsDisplay from './components/ButtonsDisplay/ButtonsDisplay';
import CalcDisplay from './components/CalcDisplay/CalcDisplay';
import Footer from './components/Footer/Footer';
import StatusBar from './components/StatusBar/StatusBar';

export default function App() {
  const [userInput, setUserInput] = useState<string>('');
  const [operationsQueue, setOperationsQueue] = useState<string[]>([]);

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      const { key, target } = event;
      const elementTarget = target as Element;

      if (elementTarget.matches('input[type="number"]')) {
        if (key >= '0' && key <= '9') {
          return; // do nothing
        }
      }
      if (key >= '0' && key <= '9') {
        setUserInput(userInput + key);
      } else if (['+', '-', '*', '/'].includes(key)) {
        setOperationsQueue([...operationsQueue, userInput, key]);
        setUserInput('');
      } else if (key === 'Enter') {
        const result = evaluate([...operationsQueue, userInput].join(' '));
        setUserInput(result);
        setOperationsQueue([]);
        event.preventDefault();
      } else if (key === 'Backspace') {
        setUserInput(userInput.slice(0, -1));
      } else if (key === 'Escape') {
        setUserInput('');
        setOperationsQueue([]);
        event.preventDefault();
      } else if (key === '.') {
        setUserInput(userInput + '.');
      }
    }

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [userInput, operationsQueue]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (e.target.validity.valid) {
      setUserInput(value);
    }
  }

  return (
    <>
      <main>
        <section>
          <StatusBar />

          <CalcDisplay
            userInput={userInput}
            handleInputChange={handleInputChange}
          />

          <ButtonsDisplay
            userInput={userInput}
            setUserInput={setUserInput}
            operationsQueue={operationsQueue}
            setOperationsQueue={setOperationsQueue}
          />

          <div className="bottom"></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
