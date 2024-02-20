import Home from "../components/Home";
import { BrowserRouter } from "react-router-dom";
import { renderWithProvider, preloadedState } from "./utils/redux-utils";
import { fireEvent, screen, waitFor } from "@testing-library/react";

describe("Home", () => {
  it("should match snapshot", () => {
    const { container } = renderWithProvider(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
      { preloadedState }
    );
    expect(container).toMatchSnapshot();
  });
  it("should render cards", () => {
    renderWithProvider(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
      { preloadedState }
    );
    expect(screen.getByAltText("cat")).toBeTruthy();
  });
  describe("Loader", () => {
    it("should not show on initial load", () => {
      renderWithProvider(
        <BrowserRouter>
          <Home />
        </BrowserRouter>,
        { preloadedState }
      );
      expect(screen.queryByText(/котиков/)).not.toBeTruthy();
    });
    it("should show on scroll and dissapear after", async () => {
      renderWithProvider(
        <BrowserRouter>
          <Home />
        </BrowserRouter>,
        { preloadedState }
      );
      fireEvent.scroll(window, { target: { scrollY: 100 } });
      expect(screen.queryByText(/котиков/)).toBeTruthy();
      await waitFor(
        () => {
          expect(screen.queryByText(/котиков/)).not.toBeTruthy();
        },
        { timeout: 2500 }
      );
    });
  });
});
