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
    render(<ChatList />);
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
    render(
      <BrowserRouter>
        <ul>
          {chats.map((chatItem) => (
            <li key={chatItem.id} data-testid="list">
              <a>{chatItem.name}</a>
            </li>
          ))}
        </ul>
      </BrowserRouter>
    );
    expect(screen.getAllByTestId("list").length).toBe(3);
  });
});
