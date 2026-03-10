import React from "react";
import styles from "./Results.module.css";

export default function Results({ stats }) {
  if (!stats) return null;

  return (
    <div aria-live="polite" className={styles.main_container}>
      <h2 className={styles.title}>Results</h2>
      <p className={styles.text}>Wins: {stats.wins}</p>
      <p className={styles.text}>Losses: {stats.losses}</p>

      <p className={styles.text}>Average Rolls: {stats.avgRolls.toFixed(2)}</p>

      <p className={styles.text}>Highest Rolls: {stats.highest}</p>
      <p className={styles.text}>Lowest Rolls: {stats.lowest}</p>

      <p className={styles.text}>Win Percentage: {stats.winPercentage.toFixed(2)}%</p>
    </div>
  );
}
