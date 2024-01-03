import { PomodoroTimer } from "./components/pomodoro-timer"

export function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={10}
        shortRestTime={10}
        longRestTime={10}
        cycles={4}
      />
    </div>
  )
}