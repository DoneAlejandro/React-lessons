import { FormMessage } from "./FormMessage";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
describe("FormMessage", () => {
  it("render form", () => {
    const addMessage = jest.fn();
    render(<FormMessage addMessage={addMessage} />);
  });

  it("button in component", () => {
    render(<FormMessage />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

//   it("onChange in input author", () => {
//     const addMessage = jest.fn();
//     render(<FormMessage addMessage={addMessage} />);

//     const input = screen.getByTestId < HTMLInputElement > "input";
//     fireEvent.change(input, { target: { value: "new value" } });
//     expect(input.value).toBe("new value");
//   });
});
