import { secondsToTime } from "../utils/seconds-to-time";

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  return (
    <span className="timer">{secondsToTime(props.mainTime)}</span>
  );
}