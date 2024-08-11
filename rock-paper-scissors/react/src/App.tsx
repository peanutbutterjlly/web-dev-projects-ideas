import { useState } from 'react';
import './App.css';
import PlayerSection from './components/PlayerSection';

const CHOICES = ['rock', 'paper', 'scissors'];

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(CHOICES[0]);
  const [computerChoice, setComputerChoice] = useState(CHOICES[0]);
  const [result, setResult] = useState('');

  function handlePlayerChoice(choice: string): void {
    setPlayerChoice(choice);

    const computerChoice = handleComputerChoice();

    switch (choice) {
      case 'rock':
        if (computerChoice === 'rock') {
          setResult('Tie');
        } else if (computerChoice === 'paper') {
          setResult('Computer wins');
        } else if (computerChoice === 'scissors') {
          setResult('Player wins');
        }
        break;
      case 'paper':
        if (computerChoice === 'rock') {
          setResult('Player wins');
        } else if (computerChoice === 'paper') {
          setResult('Tie');
        } else if (computerChoice === 'scissors') {
          setResult('Computer wins');
        }
        break;
      case 'scissors':
        if (computerChoice === 'rock') {
          setResult('Computer wins');
        } else if (computerChoice === 'paper') {
          setResult('Player wins');
        } else if (computerChoice === 'scissors') {
          setResult('Tie');
        }
        break;
    }
  }

  function handleComputerChoice(): string {
    const randomChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setComputerChoice(randomChoice);
    return randomChoice;
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
      <PlayerSection choiceSetterFunc={handlePlayerChoice} />
    </main>
  );
}
