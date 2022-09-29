import { ProfilePage } from "./ProfilePage";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "src/store";

describe("Profile Page", () => {
  it("expect render profile page", () => {
    render(
      <Provider store={store}>
        <ProfilePage />
      </Provider>
    );
  });
});
