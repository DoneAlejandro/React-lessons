import "@testing-library/jest-dom/extend-expect";
import { ToggleColorButton } from "./ToggleColorButton";
import { render } from "@testing-library/react";

describe("ToggleColorButton", () => {
  it("render button", () => {
    render(<ToggleColorButton></ToggleColorButton>);
  });
});

// it("expect button with text and call func", () => {
//     const colorMode = jest.fn();
//     const btn = screen.getByTestId("button");
//     const { rerender } = render(<ToggleColorButton />);
//     expect(btn).toHaveTextContent("тёмная тема");
//     fireEvent.click(btn);
//     expect(colorMode).toHaveBeenCalledTimes(1);
//     rerender(<ToggleColorButton />);
//     expect(btn).toHaveTextContent("светлая тема");
//   });
