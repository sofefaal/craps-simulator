import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GameForm from "../src/components/gameForm/GameForm";

describe("GameForm", () => {
  test("renders input and button", () => {
    render(<GameForm onSubmit={() => {}} />);

    expect(screen.getByLabelText(/number of games/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /run simulation/i }),
    ).toBeInTheDocument();
  });

  test("does not submit if games <= 0", () => {
    const mockSubmit = jest.fn();

    render(<GameForm onSubmit={mockSubmit} />);

    const input = screen.getByLabelText(/number of games/i);
    const button = screen.getByRole("button", { name: /run simulation/i });

    fireEvent.change(input, { target: { value: "0" } });
    fireEvent.click(button);

    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
