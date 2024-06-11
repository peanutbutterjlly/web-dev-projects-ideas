import './App.css';
import HandIcon from './components/HandIcon';
import RockIcon from './components/RockIcon';
import ScissorIcon from './components/ScissorIcon';

export default function App() {
  return (
    <main>
      <header>
        <h1>Rock Paper Scissors</h1>
        <div>
          <p>Score</p>
          <p className="score"></p>
        </div>
      </header>
      <section>
        <HandIcon />
        <RockIcon />
        <ScissorIcon />
      </section>
    </main>
  );
}
