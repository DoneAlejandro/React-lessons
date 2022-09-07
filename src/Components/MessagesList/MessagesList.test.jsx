import { render, screen } from "@testing-library/react";

import { MessagesList } from "./MessagesList";

describe("Messages list component", () => {
  it("Messages list render", () => {
    render(<MessagesList />);

    expect(screen.getByRole("list")).toBeInTheDocument;
  });

  it("List render without message", () => {
    render(<MessagesList />);

    expect(screen.queryByRole("list")).toBeInTheDocument;
  });
});
