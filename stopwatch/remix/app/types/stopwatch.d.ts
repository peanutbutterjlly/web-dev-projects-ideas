export type startProps = {
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setIntervalId: React.Dispatch<
    React.SetStateAction<ReturnType<typeof setTimeout> | undefined>
  >;
};

export type stopProps = {
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  intervalId: ReturnType<typeof setTimeout> | undefined;
};

export type clearProps = {
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  intervalId: ReturnType<typeof setTimeout> | undefined;
};
