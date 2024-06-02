import './CalcDisplayStyles.css';

interface CalcDisplayProps {
  userInput: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CalcDisplay({
  userInput,
  handleInputChange,
}: CalcDisplayProps) {
  return (
    <div className="display">
      <label className="sr-only" htmlFor="calculator">
        Calculator input/output{' '}
      </label>
      <input
        id="calculator"
        value={userInput}
        onChange={handleInputChange}
        type="text"
        placeholder="0"
        pattern="^\d*\.?\d*$"
        inputMode="decimal"
      />
    </div>
  );
}
