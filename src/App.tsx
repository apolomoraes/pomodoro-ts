import { PomodoroTimer } from "./components/pomodoro-timer"

export function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={1500}
        shortRestTime={300}
        longRestTime={900}
        cycles={4}
      />
    </div>
  )
}