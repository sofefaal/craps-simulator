import GameForm from "../src/components/gameForm/GameForm"
import Results from "../src/components/results/Results";
import { simulateGames } from "./logic/simulateGames"
import { calculateStats } from "./logic/stats"
import { useState } from "react"
import styles from './App.module.css'

function App() {
  const [gameStats, setGameStats] = useState(null)

  const handleSimulation = (games) => {
    const results = simulateGames(games)
    const stats = calculateStats(results)

    setGameStats(stats)
  }
  return (
    <div className={styles.app_container}>
    <div className={styles.card}>
    <h1>Craps Simulation Game</h1>
    <GameForm onSubmit={handleSimulation} />
    <Results stats={gameStats} />
      </div>  
    </div>
  )
}

export default App
