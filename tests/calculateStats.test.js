const { calculateStats } = require("../src/logic/stats");

describe("calculateStats", () => {
  test("correctly counts wins and losses", () => {
    const games = [
      { result: "win", rolls: 2 },
      { result: "loss", rolls: 4 },
      { result: "win", rolls: 3 },
    ];

    const stats = calculateStats(games);

    expect(stats.wins).toBe(2);
    expect(stats.losses).toBe(1);
  });

  test("calculates average rolls", () => {
    const games = [
      { result: "win", rolls: 2 },
      { result: "loss", rolls: 4 },
      { result: "win", rolls: 6 },
    ];

    const stats = calculateStats(games);

    expect(stats.avgRolls).toBe(4);
  });

  test("calculates highest and lowest rolls", () => {
    const games = [
      { result: "win", rolls: 2 },
      { result: "loss", rolls: 5 },
      { result: "win", rolls: 3 },
    ];

    const stats = calculateStats(games);

    expect(stats.highest).toBe(5);
    expect(stats.lowest).toBe(2);
  });

  test("calculates win percentage", () => {
    const games = [
      { result: "win", rolls: 2 },
      { result: "loss", rolls: 4 },
      { result: "win", rolls: 3 },
      { result: "loss", rolls: 5 },
    ];

    const stats = calculateStats(games);

    expect(stats.winPercentage).toBe(50);
  });
});
