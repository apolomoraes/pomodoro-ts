import { secondsToTime } from "../utils/seconds-to-time";

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  return (
    <p className="timer">{secondsToTime(props.mainTime)}</p>
  );
}