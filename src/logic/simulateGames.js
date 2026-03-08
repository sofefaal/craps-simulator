import { playGame } from "./crapsGame";

/*
This file contains the logic for simulating multiple games and calculating the win/loss ratio.
*/

export function simulateGames(totalGames) {
    const games = []

    for(let i = 0; i < totalGames; i++) {
        games.push(playGame())
    }

    return games
}