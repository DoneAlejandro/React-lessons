import { FormMessage } from "./FormMessage";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("FormMessage", () => {
  it("render form", () => {
    render(<FormMessage />);
  });

  it("button in component", () => {
    render(<FormMessage />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("TextFieldName change with fireEvent", () => {
    render(<FormMessage />);
    const input = screen.getByTestId<HTMLInputElement>("inputName");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(input.value).toBe("new value");
  });

  it("TextFieldMessage change with fireEvent", () => {
    render(<FormMessage />);
    const input = screen.getByTestId<HTMLInputElement>("inputMessage");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(input.value).toBe("new value");
  });
});
