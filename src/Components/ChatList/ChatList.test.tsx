import { ChatList } from "./ChatList";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("ChatList", () => {
  it("expect render chats", () => {
    const addChat = jest.fn();
    render(<ChatList chats={[]} addChat={addChat} />);
  });
  it("the chat list contains 3 chats", () => {
    const addChat = jest.fn();
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
    render(<ChatList chats={chats} addChat={addChat} />);
    expect(screen.getAllByTestId("list").length).toBe(3);
  });
});
