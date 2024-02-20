import { BrowserRouter } from "react-router-dom";
import App from "../App";
import { render } from "@testing-library/react";

describe("App", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
