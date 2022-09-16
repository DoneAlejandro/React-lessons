import { ChatList } from "./ChatList";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("ChatList", () => {
  it("expect render chats", () => {
    render(<ChatList chats={[]} />);
  });
  it("the chat list contains 3 chats", () => {
    const chats = [
      {
        id: "1",
        name: "Чат 1",
      },
      {
        id: "2",
        name: "Чат 2",
      },
      {
        id: "3",
        name: "Чат 3",
      },
    ];
    render(<ChatList chats={chats} />);
    expect(screen.getAllByTestId("list").length).toBe(3);
  });
});
