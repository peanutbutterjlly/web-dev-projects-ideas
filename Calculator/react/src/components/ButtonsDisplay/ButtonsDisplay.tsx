import { evaluate } from 'mathjs';
import './ButtonsDisplayStyles.css';

interface ButtonsDisplayProps {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  operationsQueue: string[];
  setOperationsQueue: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ButtonsDisplay({
  userInput,
  setUserInput,
  operationsQueue,
  setOperationsQueue,
}: ButtonsDisplayProps) {
  return (
    <div className="buttons">
      <button
        className="clear"
        onClick={() => {
          setUserInput('');
          setOperationsQueue([]);
        }}
      >
        AC
      </button>
      <button
        className="divide sign"
        onClick={() => {
          setOperationsQueue([...operationsQueue, userInput, '/']);
          setUserInput('');
        }}
      >
        ÷
      </button>
      <button
        className="seven num"
        onClick={() => setUserInput(userInput + '7')}
      >
        7
      </button>
      <button
        className="eight num"
        onClick={() => setUserInput(userInput + '8')}
      >
        8
      </button>
      <button
        className="nine num"
        onClick={() => setUserInput(userInput + '9')}
      >
        9
      </button>
      <button
        className="multiply sign"
        onClick={() => {
          setOperationsQueue([...operationsQueue, userInput, '*']);
          setUserInput('');
        }}
      >
        ×
      </button>
      <button
        className="four num"
        onClick={() => setUserInput(userInput + '4')}
      >
        4
      </button>
      <button
        className="five num"
        onClick={() => setUserInput(userInput + '5')}
      >
        5
      </button>
      <button className="six num" onClick={() => setUserInput(userInput + '6')}>
        6
      </button>
      <button
        className="subtract sign"
        onClick={() => {
          setOperationsQueue([...operationsQueue, userInput, '-']);
          setUserInput('');
        }}
      >
        -
      </button>
      <button className="one num" onClick={() => setUserInput(userInput + '1')}>
        1
      </button>
      <button className="two num" onClick={() => setUserInput(userInput + '2')}>
        2
      </button>
      <button
        className="three num"
        onClick={() => setUserInput(userInput + '3')}
      >
        3
      </button>
      <button
        className="add sign"
        onClick={() => {
          setOperationsQueue([...operationsQueue, userInput, '+']);
          setUserInput('');
        }}
      >
        +
      </button>
      <button
        className="zero num"
        onClick={() => setUserInput(userInput + '0')}
      >
        0
      </button>
      <button
        className="dot num"
        onClick={() => {
          setUserInput(userInput + '.');
        }}
      >
        .
      </button>
      <button
        className="equals sign"
        onClick={(event) => {
          const result = evaluate([...operationsQueue, userInput].join(' '));
          setUserInput(result);
          setOperationsQueue([]);
          event.preventDefault();
        }}
      >
        =
      </button>
    </div>
  );
}
