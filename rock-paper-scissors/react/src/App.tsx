import { useState } from 'react';
import './App.css';
import HandIcon from './components/HandIcon';
import RockIcon from './components/RockIcon';
import ScissorIcon from './components/ScissorIcon';

const CHOICES = ['Rock', 'Paper', 'Scissors'];

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(CHOICES[0]);
  const [computerChoice, setComputerChoice] = useState(CHOICES[0]);
  const [result, setResult] = useState('');

  return (
    <main>
      <header>
        <h1>Rock Paper Scissors</h1>
        <div>
          <p>Score</p>
          <p className="score"></p>
        </div>
      </header>
      <section className="result-pane">
        <p>{result}</p>
      </section>
      <section>
        <HandIcon />
        <RockIcon />
        <ScissorIcon />
      </section>
    </main>
  );
}
