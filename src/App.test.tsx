import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { App } from "./App";

jest.mock("nanoid", () => {
  return { nanoid: () => "1234" };
});

describe("App", () => {
  it("render App", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  it("ProfilePage url", () => {
    render(
      <MemoryRouter initialEntries={["/profile"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("Profile page")).toBeInTheDocument();
  });

  it("MainPage url", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText("MainPage")).toBeInTheDocument();
  });
});
