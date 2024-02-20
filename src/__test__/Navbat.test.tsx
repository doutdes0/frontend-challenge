import NavBar from "../components/Navbar";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { renderWithProvider, preloadedState } from "./utils/redux-utils";
import { fireEvent } from "@testing-library/react";

describe("Navbar", () => {
  it("should match snapshot", () => {
    const { container } = renderWithProvider(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
      { preloadedState }
    );
    expect(container).toMatchSnapshot();
  });
  describe("Link", () => {
    it("should be active onload on home route, should toggle active class on route change", () => {
      const { container } = renderWithProvider(
        <MemoryRouter initialEntries={["/"]}>
          <NavBar />
        </MemoryRouter>,
        { preloadedState }
      );

      const homeLink = container.querySelector('div[data-link="/"] a');
      const favLink = container.querySelector('div[data-link="/favorites"] a');

      expect(homeLink?.classList.contains("active")).toBeTruthy();
      fireEvent.click(favLink!);
      expect(homeLink?.classList.contains("active")).not.toBeTruthy();
      expect(favLink?.classList.contains("active")).toBeTruthy();
    });
  });
});
