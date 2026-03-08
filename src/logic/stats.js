/*
Calculate the win/loss ratio of a certain number of games, and return an array of the results of each game.

*/

export function calculateStats(games) {
    const rolls = games.map(g => g.rolls)
    const wins = games.filter(g => g.result === "win").length
    const losses = games.length - wins

    const avgRolls = rolls.reduce((sum, r) => sum + r, 0) / rolls.length
    const highest = Math.max(...rolls)
    const lowest = Math.min(...rolls)

    return {
        wins,
        losses,
        avgRolls,
        highest,
        lowest,
        winPercentage: ( wins/ games.length ) * 100
    }
}