import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

afterEach(cleanup);

test("App.js", () => {
  render(<App />);
});
