/*
This file contains the dice logic: 

rollDice = this stimulates rolling one dice 

rollDiceTwice = stimulates rolling the dice twice 

*/
export function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

export function rollDiceTwice() {
  return rollDice() + rollDice();
}
