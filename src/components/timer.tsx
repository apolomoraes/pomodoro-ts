import { secondsToMinutes } from "../utils/seconds-to-minutes";

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  return (
    <span className="timer">{secondsToMinutes(props.mainTime)}</span>
  );
}