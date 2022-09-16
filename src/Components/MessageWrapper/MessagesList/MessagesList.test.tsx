import { render, screen } from "@testing-library/react";
import { AUTHOR } from "src/types";

import { MessagesList } from "./MessagesList";

describe("Messages list component", () => {
  it("Messages list render", () => {
    render(<MessagesList messages={[]} />);
  });

  it("message list is empty", () => {
    render(<MessagesList messages={[]} />);
    expect(screen.queryAllByRole("li").length).toBe(0);
  });
  it("the message list contains 2 messages", () => {
    const messages = [
      {
        author: "Alex",
        message: "hello",
        customers: AUTHOR.USER,
      },
      {
        author: "Sasha",
        message: "hi",
        customers: AUTHOR.USER,
      },
    ];
    render(<MessagesList messages={messages} />);
    expect(screen.getAllByTestId("li").length).toBe(2);
  });
});
