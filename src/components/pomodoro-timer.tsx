import { useState } from 'react'
import { useInterval } from '../hooks/use-interval';

/* eslint-disable @typescript-eslint/no-unused-vars */
interface Props {
  defaultPomodoroTime: number
}
export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000)

  return (
    <div>Olá mundo</div>
  )
}