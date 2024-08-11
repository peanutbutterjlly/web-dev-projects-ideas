import { useState } from 'react';
import './App.css';
import ChoiceButton from './components/ChoiceButton';

const CHOICES = ['rock', 'paper', 'scissors'];

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(CHOICES[0]);
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

  return (
    <main>
      <header>
        <h1>Rock Paper Scissors</h1>
        <div>
          <p>Score</p>
          <p className="score"></p>
        </div>
      </header>
      <section className="result">
        <h2>{result}</h2>
      </section>
      <div className="choices">
        <section className="player">
          <h2>Your Choice</h2>
          {CHOICES.map((choice) => (
            <ChoiceButton
              key={choice}
              choice={choice}
              onClickFunc={() => handlePlayerChoice(choice)}
            />
          ))}
        </section>
        <section className="computer">
          <h2>Computer Choice</h2>
          {computerChoice && <ChoiceButton choice={computerChoice} />}
        </section>
      </div>
    </main>
  );
}
