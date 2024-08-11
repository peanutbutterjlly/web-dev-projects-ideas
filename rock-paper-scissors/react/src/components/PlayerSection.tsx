import HandIcon from './HandIcon';
import RockIcon from './RockIcon';
import ScissorIcon from './ScissorIcon';

export default function PlayerSection({ choiceSetterFunc }) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const playerChoice = (e.nativeEvent as SubmitEvent).submitter?.value;
    choiceSetterFunc(playerChoice);
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <button type="submit" value={'paper'}>
          <HandIcon />
        </button>
        <button type="submit" value={'rock'}>
          <RockIcon />
        </button>
        <button type="submit" value={'scissors'}>
          <ScissorIcon />
        </button>
      </form>
    </section>
  );
}
