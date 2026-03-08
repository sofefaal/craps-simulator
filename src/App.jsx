import GameForm from "./components/GameForm"
import Results from "./components/Results"
import { simulateGames } from "./logic/simulateGames"
import { calculateStats } from "./logic/stats"
import { useState } from "react"
import './App.css'

function App() {
  const [gameStats, setGameStats] = useState(null)

  const handleSimulation = (games) => {
    const results = simulateGames(games)
    const stats = calculateStats(results)

    setGameStats(stats)
  }
  return (
    <>
    <h1>Craps Simulation Game</h1>
    <GameForm onSubmit={handleSimulation} />
    <Results stats={gameStats} />
    </>
  )
}

export default App
