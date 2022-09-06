import { FormMessage } from "./FormMessage";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("FormMessage", () => {
  it("render form", () => {
    render(<FormMessage addMessage />);
    screen.debug();
  });
  it("input for author", () => {
    const onChange = jest.fn();
    render(<input onChange={onChange} />);
  });
  it("input for text", () => {
    const onChange = jest.fn();
    render(<input onChange={onChange} />);
  });
  it("button for send message", () => {
    render(<button disabled />);
  });
});
