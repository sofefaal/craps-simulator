const { rollDice, rollDiceTwice } = require("../src/logic/dice");

describe("Dice functions", () => {
  it("rollDice returns a number between 1 and 6", () => {
    const roll = rollDice();

    expect(roll).toBeGreaterThanOrEqual(1);
    expect(roll).toBeLessThanOrEqual(6);
  });

  it("rollDiceTwice returns a number between 2 and 12", () => {
    const roll = rollDiceTwice();

    expect(roll).toBeGreaterThanOrEqual(2);
    expect(roll).toBeLessThanOrEqual(12);
  });
});
