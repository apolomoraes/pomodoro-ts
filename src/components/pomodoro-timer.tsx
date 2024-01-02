import { useState, useEffect } from 'react'
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';
import bellStart from '../sounds/bell-start.mp3';
import bellFinish from '../sounds/bell-finish.mp3';

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);
interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}
export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [timeCouting, setTimeCouting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [working]);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, timeCouting ? 1000 : null);

  const configureWork = () => {
    setTimeCouting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
    audioStartWorking.play();
  };

  const configureRest = (long: boolean) => {
    setTimeCouting(true);
    setWorking(false);
    setResting(true);

    if (long) {
      setMainTime(props.longRestTime);
    } else {
      setMainTime(props.shortRestTime);
    }

    audioStopWorking.play();
  }

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button
          text="Work"
          onClick={() => configureWork()}
        />
        <Button
          text="Rest"
          onClick={() => configureRest(false)}
        />
        <Button
          className={!working && !resting ? 'hidden' : ''}
          text={timeCouting ? 'Pause' : 'Play'}
          onClick={() => setTimeCouting(!timeCouting)}
        />
      </div>

      <div className="datails">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius suscipit architecto magni at! Porro, incidunt. Delectus quia dignissimos reprehenderit voluptatem commodi doloribus impedit, maxime repellat hic nihil exercitationem atque modi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius suscipit architecto magni at! Porro, incidunt. Delectus quia dignissimos reprehenderit voluptatem commodi doloribus impedit, maxime repellat hic nihil exercitationem atque modi.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius suscipit architecto magni at! Porro, incidunt. Delectus quia dignissimos reprehenderit voluptatem commodi doloribus impedit, maxime repellat hic nihil exercitationem atque modi.</p>
      </div>
    </div>
  )
}