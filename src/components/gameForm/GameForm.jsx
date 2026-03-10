import React from "react";
import styles from "./GameForm.module.css";

export default function GameForm({onSubmit}) {

  const handleSubmit = (e) => {
        e.preventDefault()

        const games = Number(e.target.games.value)

        if (games <=0) return

        onSubmit(games)
    }

    return(
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="games">Number of Games:</label>
        <input
          className={styles.input}
          id="games"
          name="games"
          type="number"
          min="1"
          required
        />

        <button className={styles.button} type="submit">
          Run Simulation
        </button>
      </form>
    </>
  );
}
