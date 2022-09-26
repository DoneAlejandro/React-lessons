import "@testing-library/jest-dom/extend-expect";
import { ToggleColorButton } from "./ToggleColorButton";
import { render } from "@testing-library/react";

describe("ToggleColorButton", () => {
  it("render button", () => {
    render(<ToggleColorButton></ToggleColorButton>);
  });
});
