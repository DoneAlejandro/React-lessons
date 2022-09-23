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

// import { MessageWrapper } from "./MessageWrapper";
// import { screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import "@testing-library/jest-dom";
// import { render } from "@testing-library/react";

// describe("MessageWrapper", () => {
//   it("render component", () => {
//     render(<MessageWrapper />);
//   });

//   it("answer bot", async () => {
//     render(<MessageWrapper />);
//     const inputName = screen.getByTestId<HTMLInputElement>("inputName");
//     const inputMessage = screen.getByTestId<HTMLInputElement>("inputMessage");

//     await userEvent.type(inputName, "Alex");
//     await userEvent.type(inputMessage, "hello");

//     const button = screen.getByTestId("button");
//     await userEvent.click(button);

//     expect(
//       await screen.findByText(/BOT время отправки/, undefined, {
//         timeout: 1600,
//       })
//     ).toBeInTheDocument();
//   });
// });
