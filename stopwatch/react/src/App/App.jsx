import reactLogo from '../assets/react.svg';
import Stopwatch from '../Stopwatch/Stopwatch';
import './App.css';
import viteLogo from '/vite.svg';

function App() {
  return (
    <>
      <main>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <Stopwatch />
        </div>
      </main>

      <footer>
        Made with ❤️ by{' '}
        <a href="https://srios.net" target="_blank">
          Steve Rios
        </a>
      </footer>
    </>
  );
}

export default App;
