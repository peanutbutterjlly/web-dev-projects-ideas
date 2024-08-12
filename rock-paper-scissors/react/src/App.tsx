import { useState } from 'react';
import './App.css';
import ChoiceButton from './components/ChoiceButton';
import { useKey } from './hooks/use-key-listener';

const CHOICES = ['rock', 'paper', 'scissors'];

export default function App() {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  function getRandomChoice(): string {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
  }

  function determineWinner(player: string, computer: string): string {
    if (player === computer) {
      return `It's a Tie`;
    }
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'scissors' && computer === 'paper') ||
      (player === 'paper' && computer === 'rock')
    ) {
      return 'You win!';
    }

    return 'Computer wins!';
  }

  function handlePlayerChoice(choice: string): void {
    const computer = getRandomChoice();
    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(determineWinner(choice, computer));
  }

  function resetGame(): void {
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
  }

  useKey(resetGame, 'Escape');

  return (
    <main>
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>
      <section className="result">
        <h2>{result}</h2>
      </section>
      <div className="choices">
        <section className="player">
          <h2>{playerChoice || 'Make your choice'}</h2>
          {(playerChoice && <ChoiceButton choice={playerChoice} />) ||
            CHOICES.map((choice) => (
              <ChoiceButton
                key={choice}
                choice={choice}
                onClickFunc={() => handlePlayerChoice(choice)}
              />
            ))}
        </section>
        <section className="computer">
          <h2>{computerChoice || 'Computer choice'}</h2>
          {computerChoice && <ChoiceButton choice={computerChoice} />}
        </section>
      </div>
      <button
        className="reset-button"
        style={{
          visibility: result ? 'visible' : 'hidden',
          opacity: result ? 1 : 0,
        }}
        onClick={resetGame}
      >
        Reset
      </button>
    </main>
  );
}
