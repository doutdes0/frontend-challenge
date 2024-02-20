import { BrowserRouter } from "react-router-dom";
import { key, preloadedState, renderWithProvider } from "./utils/redux-utils";
import LikeButton from "../components/LikeButton";
import { fireEvent } from "@testing-library/react";

describe("LikeButton", () => {
  it("should match snapshot", () => {
    const { container } = renderWithProvider(
      <BrowserRouter>
        <LikeButton
          id={key}
          isLiked={false}
        />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
  it("should toggle like on click", () => {
    const { container, store } = renderWithProvider(
      <BrowserRouter>
        <LikeButton
          id={key}
          isLiked={false}
        />
      </BrowserRouter>,
      { preloadedState }
    );
    const btn = container.querySelector("div.btn-wrapper");

    fireEvent.click(btn!);
    expect(store.getState().cats[key].isLiked).toBeTruthy();
    fireEvent.click(btn!);
    expect(store.getState().cats[key].isLiked).toBeFalsy();
  });
});
