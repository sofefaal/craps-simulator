const { playGame } = require("../src/logic/crapsGame");
const dice = require("../src/logic/dice");

jest.mock("../src/logic/dice");

describe("Craps Game", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("player loses immediately with 2, 3, or 12", () => {
    dice.rollDiceTwice.mockReturnValue(2);

    const result = playGame();

    expect(result.result).toBe("loss");
    expect(result.rolls).toBe(1);
  });

  test("player wins immediately with 7 or 11", () => {
    dice.rollDiceTwice.mockReturnValue(7);

    const result = playGame();

    expect(result.result).toBe("win");
    expect(result.rolls).toBe(1);
  });

  test("player wins by hitting the point again", () => {
    dice.rollDiceTwice
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(5)

    const result = playGame();

    expect(result.result).toBe("win");
    expect(result.rolls).toBe(3);
  });

  test("player loses if 7 appears before point", () => {
    dice.rollDiceTwice
      .mockReturnValueOnce(6)
      .mockReturnValueOnce(4)
      .mockReturnValueOnce(7)

    const result = playGame();

    expect(result.result).toBe("loss");
    expect(result.rolls).toBe(3);
  });
});
