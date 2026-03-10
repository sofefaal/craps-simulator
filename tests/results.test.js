import React from "react";
import { render, screen } from "@testing-library/react";
import Results from "../src/components/results/Results";

describe("Results component", () => {
  const mockStats = {
    wins: 10,
    losses: 5,
    avgRolls: 3.456,
    highest: 8,
    lowest: 1,
    winPercentage: 66.666,
  };

  test("does not render when stats is null", () => {
    const { container } = render(<Results stats={null} />);
    expect(container.firstChild).toBeNull();
  });

  test("renders results when stats exist", () => {
    render(<Results stats={mockStats} />);

    expect(screen.getByText(/wins/i)).toBeInTheDocument();
    expect(screen.getByText(/losses/i)).toBeInTheDocument();
  });

  test("displays correct stats values", () => {
    render(<Results stats={mockStats} />);

    expect(screen.getByText("Wins: 10")).toBeInTheDocument();
    expect(screen.getByText("Losses: 5")).toBeInTheDocument();
    expect(screen.getByText("Highest Rolls: 8")).toBeInTheDocument();
    expect(screen.getByText("Lowest Rolls: 1")).toBeInTheDocument();
  });

  test("formats numbers correctly", () => {
    render(<Results stats={mockStats} />);

    expect(screen.getByText("Average Rolls: 3.46")).toBeInTheDocument();
    expect(screen.getByText("Win Percentage: 66.67%")).toBeInTheDocument();
  });
});
