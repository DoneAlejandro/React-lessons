import { ChatList } from "./ChatList";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

jest.mock("nanoid", () => {
  return { nanoid: () => "1234" };
});

describe("ChatList", () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it("expect render chats", () => {
    const addChat = jest.fn();
    const deleteChat = jest.fn();
    render(<ChatList chats={[]} addChat={addChat} deleteChat={deleteChat} />);
  });
  it("the chat list contains 3 chats", () => {
    const addChat = jest.fn();
    const deleteChat = jest.fn();
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
    render(
      <BrowserRouter>
        <ChatList chats={chats} addChat={addChat} deleteChat={deleteChat} />
      </BrowserRouter>
    );
    expect(screen.getAllByTestId("list").length).toBe(3);
  });
});
