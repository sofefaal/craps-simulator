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

  test("rollDice always stays within range after many rolls", () => {
    for (let i = 0; i < 100; i++) {
      const roll = rollDice();
      expect(roll).toBeGreaterThanOrEqual(1);
      expect(roll).toBeLessThanOrEqual(6);
    }
  });

  test("rollDiceTwice returns a number", () => {
    const roll = rollDiceTwice();
    expect(typeof roll).toBe("number");
  });

  test("rollDiceTwice returns a value between 2 and 12", () => {
    const roll = rollDiceTwice();

    expect(roll).toBeGreaterThanOrEqual(2);
    expect(roll).toBeLessThanOrEqual(12);
  });

  test("rollDiceTwice always stays within range after many rolls", () => {
    for (let i = 0; i < 100; i++) {
      const roll = rollDiceTwice();
      expect(roll).toBeGreaterThanOrEqual(2);
      expect(roll).toBeLessThanOrEqual(12);
    }
  });
});
