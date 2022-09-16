import { MessageWrapper } from "./MessageWrapper";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("MessageWrapper", () => {
  it("render component", () => {
    render(<MessageWrapper />);
  });

  it("answer bot", async () => {
    render(<MessageWrapper />);
    const inputName = screen.getByTestId<HTMLInputElement>("inputName");
    const inputMessage = screen.getByTestId<HTMLInputElement>("inputMessage");

    await userEvent.type(inputName, "Alex");
    await userEvent.type(inputMessage, "hello");

    const button = screen.getByTestId("button");
    await userEvent.click(button);

    expect(
      await screen.findByText(/BOT время отправки/, undefined, {
        timeout: 1600,
      })
    ).toBeInTheDocument();
  });
});
