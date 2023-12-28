import { useState } from 'react'
import { useInterval } from '../hooks/use-interval';
// import { secondsToTime } from '../utils/seconds-to-time';
import { Button } from './button';
import { Timer } from './timer';

/* eslint-disable @typescript-eslint/no-unused-vars */
interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}
export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000)

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="teste" />
        <Button text="teste" />
        <Button text="teste" />
      </div>

      <div className="datails">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius suscipit architecto magni at! Porro, incidunt. Delectus quia dignissimos reprehenderit voluptatem commodi doloribus impedit, maxime repellat hic nihil exercitationem atque modi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius suscipit architecto magni at! Porro, incidunt. Delectus quia dignissimos reprehenderit voluptatem commodi doloribus impedit, maxime repellat hic nihil exercitationem atque modi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius suscipit architecto magni at! Porro, incidunt. Delectus quia dignissimos reprehenderit voluptatem commodi doloribus impedit, maxime repellat hic nihil exercitationem atque modi.</p>
      </div>
    </div>
  )
}