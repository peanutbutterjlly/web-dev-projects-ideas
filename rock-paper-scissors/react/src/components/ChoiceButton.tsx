import HandIcon from './HandIcon';
import RockIcon from './RockIcon';
import ScissorIcon from './ScissorIcon';

interface ChoiceButtonProps {
  choice: string;
  onClickFunc?: () => void;
}

/**
 * A reusable button component for selecting a choice (rock, paper, or scissors).
 *
 * @param {string} choice - The type of choice to display (rock, paper, or scissors).
 * @param {function} [onClickFunc] - An optional function to call when the button is clicked.
 * @return {JSX.Element} A button element with the selected choice icon.
 */
export default function ChoiceButton({
  choice,
  onClickFunc,
}: ChoiceButtonProps) {
  function Icon() {
    switch (choice) {
      case 'rock':
        return <RockIcon />;
      case 'paper':
        return <HandIcon />;
      case 'scissors':
        return <ScissorIcon />;
    }
  }

  if (!onClickFunc) {
    return <Icon />;
  }

  return (
    <button onClick={onClickFunc}>
      <Icon />
    </button>
  );
}
