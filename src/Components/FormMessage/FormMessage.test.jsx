import { FormMessage } from "./FormMessage";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const onChange = jest.fn();

describe("FormMessage", () => {
  it("render form", () => {
    render(<FormMessage />);
  });

  it("button in component", () => {
    render(<FormMessage />);
    expect(screen.getByRole("button")).toBeInTheDocument;
  });

  it("onChange in input author", () => {
    render(<FormMessage onChange={onChange} />);
    userEvent.type(screen.getAllByRole("textbox"), "hello");
    expect(onChange).toHaveBeenCalled;
  });
});
