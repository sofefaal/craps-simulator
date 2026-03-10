const { simulateGames } = require("../src/logic/simulateGames");
const crapsGame = require("../src/logic/crapsGame");

jest.mock("../src/logic/crapsGame");

describe("simulateGames", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("returns correct number of games", () => {
    crapsGame.playGame.mockReturnValue({ result: "win", rolls: 3 });

    const games = simulateGames(5);

    expect(games.length).toBe(5);
  });

  test("calls playGame correct number of times", () => {
    crapsGame.playGame.mockReturnValue({ result: "loss", rolls: 2 });

    simulateGames(10);

    expect(crapsGame.playGame).toHaveBeenCalledTimes(10);
  });

  test("returns array of game results", () => {
    crapsGame.playGame.mockReturnValue({ result: "win", rolls: 4 });

    const games = simulateGames(3);

    expect(games).toEqual([
      { result: "win", rolls: 4 },
      { result: "win", rolls: 4 },
      { result: "win", rolls: 4 },
    ]);
  });
});
