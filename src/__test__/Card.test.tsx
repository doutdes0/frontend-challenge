import { BrowserRouter } from "react-router-dom";
import Card from "../components/Card";
import { preloadedState, key, renderWithProvider } from "./utils/redux-utils";

describe("Card", () => {
  it("should match snapshot", () => {
    const { container } = renderWithProvider(
      <BrowserRouter>
        <Card {...preloadedState.cats[key]} />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
