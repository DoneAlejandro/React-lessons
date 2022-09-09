import { render, screen } from "@testing-library/react";

import { MessagesList } from "./MessagesList";

describe("Messages list component", () => {
  it("Messages list render", () => {
    render(<MessagesList messages={[]} />);
  });

//   it("List render without message", () => {
//     render(<MessagesList messages={[]} />);

//     expect(screen.queryAllByRole < HTMLLIElement > "li".length).toBe(0);
//   });
});
