import { rollDiceTwice } from "./dice"

/*
This file contains the logic for the craps game, including  determining the 
loss or win of the game, and resetting the game.

*/

export function playGame() {

    let rolls = 1
    let rollCount = rollDiceTwice()
    
    //determine loss
    if([2, 3, 12].includes(rollCount)) {
        return {results: "loss", rolls}
    }

    //determine win
    if([7, 11].includes(rollCount)) {
        return {results: "win", rolls}
    }

    //determine points
    const point = rollCount

    while(true) {
        rolls++
        rollCount = rollDiceTwice()

        if(rollCount === point) {
            return {results: "win", rolls}
        }

        if(rollCount === 7) {
            return {results: "loss", rolls}
        }
    }
}
