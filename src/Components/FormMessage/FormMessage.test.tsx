import { FormMessage } from "./FormMessage";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("FormMessage", () => {
  it("render form", () => {
    const addMessage = jest.fn();
    render(<FormMessage addMessage={addMessage} />);
  });

  it("button in component", () => {
    const addMessage = jest.fn();
    render(<FormMessage addMessage={addMessage} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("TextFieldName change with fireEvent", () => {
    const addMessage = jest.fn();
    render(<FormMessage addMessage={addMessage} />);
    const input = screen.getByTestId<HTMLInputElement>("inputName");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(input.value).toBe("new value");
  });

  it("TextFieldMessage change with fireEvent", () => {
    const addMessage = jest.fn();
    render(<FormMessage addMessage={addMessage} />);
    const input = screen.getByTestId<HTMLInputElement>("inputMessage");
    fireEvent.change(input, { target: { value: "new value" } });
    expect(input.value).toBe("new value");
  });
});

