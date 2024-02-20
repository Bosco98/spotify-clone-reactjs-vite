import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

jest.mock("./components/Sections/MainSection", () => {
  return {
    default: jest.fn().mockReturnValue(<div> </div>),
  };
});

jest.mock("./components/Sections/Player", () => {
  return {
    default: jest.fn().mockReturnValue(<div></div>),
  };
});

// These work more like integration tests 

describe("App Component", () => {
  test("renders without crashing", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  test("renders AsideMenu", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const asideMenu = getByRole("navigation");
    expect(asideMenu).toBeInTheDocument;
  });

  test("renders MainSection", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const mainSection = getByRole("main");
    expect(mainSection).toBeInTheDocument;
  });

  test("renders Player", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const player = getByRole("contentinfo");
    expect(player).toBeInTheDocument;
  });

});
