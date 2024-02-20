import Favorites from "../components/Favorites";
import { BrowserRouter } from "react-router-dom";
import { renderWithProvider, preloadedState } from "./utils/redux-utils";
import { screen } from "@testing-library/react";
import { toggle_like } from "../redux/catSlice";
import { act } from "react-dom/test-utils";

describe("Favotites", () => {
  it("should match snapshot", () => {
    const { container } = renderWithProvider(
      <BrowserRouter>
        <Favorites />
      </BrowserRouter>,
      { preloadedState }
    );
    expect(container).toMatchSnapshot();
  });
  it("should not render unfavorited cards", () => {
    renderWithProvider(
      <BrowserRouter>
        <Favorites />
      </BrowserRouter>,
      { preloadedState }
    );
    expect(screen.queryByAltText("cat")).not.toBeTruthy();
  });
  it("should render favorited cards", () => {
    const { store } = renderWithProvider(
      <BrowserRouter>
        <Favorites />
      </BrowserRouter>,
      { preloadedState }
    );
    act(() => {
      store.dispatch(toggle_like(Object.keys(preloadedState.cats)[0]));
    });
    expect(screen.getByAltText("cat")).toBeTruthy();
  });
});
