import { PomodoroTimer } from "./components/pomodoro-timer"

export function App(): JSX.Element {

  return (
    <>
      <PomodoroTimer 
        defaultPomodoroTime={1500}
      />
    </>
  )
}