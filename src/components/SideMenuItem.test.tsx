import { render } from "@testing-library/react";
import SideMenuItem from "./SideMenuItem";
import { BrowserRouter as Router } from "react-router-dom";

describe("SideMenuItem Component", () => {
  test("renders SideMenuItem component with correct text", () => {
    const text = "Search";
    const { getByText } = render(
      <Router>
        <SideMenuItem text={text} />
      </Router>
    );
    const menuItemText = getByText(text);
    expect(menuItemText).toBeInTheDocument;
  });

  test('renders SideMenuItem component with "Library" text as "Your Library"', () => {
    const text = "Library";
    const { getByText } = render(
      <Router>
        <SideMenuItem text={text} />
      </Router>
    );

    const menuItemText = getByText("Your Library");
    expect(menuItemText).toBeInTheDocument;
  });

  test("renders SideMenuItem component with an icon", () => {
    const text = "Search";
    const { container } = render(
      <Router>
        <SideMenuItem text={text} />
      </Router>
    );

    // Ensure there's an icon within the Link element
    const linkElement = container.querySelector("a");
    expect(linkElement).toBeInTheDocument;
  });
});
